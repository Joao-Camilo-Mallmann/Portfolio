// Gera um CSS enxuto do PrimeIcons contendo apenas os ícones e utilitários usados em src/.
// Roda antes do dev (predev) e do build (prebuild) e grava src/assets/primeicons.generated.css.
//
//   node scripts/generate-icons-css.mjs

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SRC_DIR = fileURLToPath(new URL('../src', import.meta.url))
const PRIMEICONS_CSS = fileURLToPath(
  new URL('../node_modules/primeicons/primeicons.css', import.meta.url),
)
const OUTPUT = fileURLToPath(new URL('../src/assets/primeicons.generated.css', import.meta.url))

const SCAN_EXTENSIONS = new Set(['.vue', '.js', '.json'])
const ICON_PATTERN = /\bpi-[a-z0-9-]+/g
const UTILITY_NAME_PATTERN = /^pi-(?:fw|spin|pulse|flip-[a-z0-9-]+)$/
const UTILITY_SELECTOR_PATTERN = /\.(pi-(?:fw|spin|pulse|flip-[a-z0-9-]+))\b/g
const KEYFRAMES_PATTERN = /^@(?:-webkit-)?keyframes\s+([a-zA-Z0-9_-]+)/
const ICON_RULE_PATTERN = /^\.(pi-[a-z0-9-]+)::?before$/

const GENERATED_HEADER = [
  '/* Arquivo gerado automaticamente por scripts/generate-icons-css.mjs */',
  '/* Não edite manualmente — regenere com: bun run icons:sync (ou node scripts/generate-icons-css.mjs) */',
].join('\n')

const FONT_FACE_BLOCK = `@font-face {
  font-family: 'primeicons';
  font-display: block;
  src: url('../../node_modules/primeicons/fonts/primeicons.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}`

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Varre recursivamente src/ coletando nomes de classes pi-* usados */
async function collectUsedNames(dir, usedNames = new Set()) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      await collectUsedNames(fullPath, usedNames)
    } else if (entry.isFile() && SCAN_EXTENSIONS.has(extname(entry.name))) {
      const content = await readFile(fullPath, 'utf8')
      for (const match of content.matchAll(ICON_PATTERN)) {
        usedNames.add(match[0])
      }
    }
  }
  return usedNames
}

/** Extrai blocos CSS de nível superior preservando regras aninhadas (@media, @keyframes) */
function extractTopLevelBlocks(css) {
  const normalized = css.replace(/\r\n/g, '\n')
  const blocks = []
  let i = 0
  let depth = 0
  let blockStart = -1
  let firstBrace = -1
  let inString = null

  while (i < normalized.length) {
    const char = normalized[i]
    const next = normalized[i + 1]

    // Ignora comentários CSS fora de strings
    if (!inString && char === '/' && next === '*') {
      const end = normalized.indexOf('*/', i + 2)
      i = end === -1 ? normalized.length : end + 2
      continue
    }

    if (inString) {
      if (char === '\\') {
        i += 2
        continue
      }
      if (char === inString) inString = null
      i++
      continue
    }

    if (char === '"' || char === "'") {
      inString = char
      i++
      continue
    }

    // Ignora diretivas simples sem bloco (ex: @charset, @import)
    if (depth === 0 && char === ';') {
      blockStart = -1
      i++
      continue
    }

    if (depth === 0 && blockStart === -1 && !/\s/.test(char)) {
      blockStart = i
    }

    if (char === '{') {
      if (depth === 0) firstBrace = i
      depth++
    } else if (char === '}') {
      depth--
      if (depth === 0 && blockStart !== -1 && firstBrace !== -1) {
        const prelude = normalized
          .slice(blockStart, firstBrace)
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .trim()
        const raw = normalized.slice(blockStart, i + 1).trim()
        blocks.push({ prelude, raw })
        blockStart = -1
        firstBrace = -1
      }
    }

    i++
  }

  return blocks
}

async function generate() {
  const [usedNames, originalCss] = await Promise.all([
    collectUsedNames(SRC_DIR),
    readFile(PRIMEICONS_CSS, 'utf8'),
  ])

  const blocks = extractTopLevelBlocks(originalCss)
  const baseRules = []
  const utilityBlocks = []
  const keyframeBlocks = []
  const iconRules = new Map()

  for (const { prelude, raw } of blocks) {
    if (prelude === '@font-face') continue

    if (prelude === '.pi' || prelude === '.pi:before' || prelude === '.pi::before') {
      baseRules.push(raw)
      continue
    }

    const iconMatch = prelude.match(ICON_RULE_PATTERN)
    if (iconMatch) {
      iconRules.set(iconMatch[1], raw)
      continue
    }

    const keyframeMatch = prelude.match(KEYFRAMES_PATTERN)
    if (keyframeMatch) {
      keyframeBlocks.push({ name: keyframeMatch[1], raw })
      continue
    }

    const utilityNames = [...new Set([...raw.matchAll(UTILITY_SELECTOR_PATTERN)].map((m) => m[1]))]
    if (utilityNames.length > 0) {
      utilityBlocks.push({ names: utilityNames, raw })
    }
  }

  const sections = [GENERATED_HEADER, FONT_FACE_BLOCK, ...baseRules]

  const includedUtilityBlocks = utilityBlocks.filter((block) =>
    block.names.some((name) => usedNames.has(name)),
  )
  for (const block of includedUtilityBlocks) {
    sections.push(block.raw)
  }

  if (includedUtilityBlocks.length > 0) {
    const usedUtilityCss = includedUtilityBlocks.map((block) => block.raw).join('\n')
    for (const kf of keyframeBlocks) {
      const pattern = new RegExp(`(?<![a-zA-Z0-9_-])${escapeRegExp(kf.name)}(?![a-zA-Z0-9_-])`)
      if (pattern.test(usedUtilityCss)) {
        sections.push(kf.raw)
      }
    }
  }

  const sortedNames = [...usedNames].sort()
  const includedIcons = []
  for (const name of sortedNames) {
    const rule = iconRules.get(name)
    if (rule) {
      includedIcons.push(rule)
    } else if (!UTILITY_NAME_PATTERN.test(name)) {
      console.warn(`[generate-icons-css] ícone não encontrado no PrimeIcons: ${name}`)
    }
  }

  if (includedIcons.length > 0) {
    sections.push(includedIcons.join('\n'))
  }

  const outputCss = `${sections.join('\n\n')}\n`
  await writeFile(OUTPUT, outputCss, 'utf8')
  console.log(
    `[generate-icons-css] ${includedIcons.length} ícones gerados em src/assets/primeicons.generated.css`,
  )
}

await generate()
