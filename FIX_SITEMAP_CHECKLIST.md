# 🔧 Checklist para Resolver Erro 404 do Sitemap no Google Search Console

## ✅ Alterações Aplicadas

1. **sitemap.xml** - Atualizado com data correta (2025-10-27) e URLs SEM hash

   - ✅ `https://joao-camilo-mallmann.com/`
   - ✅ `https://joao-camilo-mallmann.com/dev`
   - ✅ `https://joao-camilo-mallmann.com/editor`

2. **robots.txt** - Atualizado para rotas sem hash
3. **CNAME** - Adicionado domínio: `joao-camilo-mallmann.com`
4. **.htaccess** - Adicionado MIME types para XML e cache correto
5. **vite.config.js** - Garantido que arquivos públicos sejam copiados
6. **.nojekyll** - Criado para evitar processamento Jekyll no GitHub Pages

---

## 🚀 Próximos Passos (IMPORTANTE!)

### 1. **Fazer Build e Deploy**

```bash
# Fazer build do projeto
bun run build

# Verificar se sitemap.xml está na pasta dist
ls -la dist/sitemap.xml
ls -la dist/robots.txt
ls -la dist/CNAME

# Se estiver usando GitHub Actions, fazer commit e push
git add .
git commit -m "fix: Corrigir sitemap.xml e configurações SEO"
git push origin main
```

### 2. **Verificar se Sitemap está Acessível**

Após o deploy, teste no navegador:

- ✅ https://joao-camilo-mallmann.com/sitemap.xml
- ✅ https://joao-camilo-mallmann.com/robots.txt
- ✅ https://joao-camilo-mallmann.com/dev
- ✅ https://joao-camilo-mallmann.com/editor

**Deve mostrar o XML corretamente!**

**URLs no Sitemap (SEM hash):**

```xml
https://joao-camilo-mallmann.com/
https://joao-camilo-mallmann.com/dev
https://joao-camilo-mallmann.com/editor
```

### 3. **No Google Search Console**

#### 3.1 Remover Sitemap Antigo

1. Vá em **Sitemaps** no menu lateral
2. Se houver sitemap com erro, clique nos 3 pontinhos → **Remover**

#### 3.2 Adicionar Sitemap Novamente

1. No campo "Adicionar um novo sitemap"
2. Digite: `sitemap.xml`
3. Clique em **ENVIAR**

#### 3.3 Forçar Revalidação

1. Após adicionar, clique em **Teste de sitemap ao vivo**
2. Aguarde 24-48h para Google processar

### 4. **Verificar DNS e Domínio**

```bash
# Verificar se domínio resolve corretamente
ping joao-camilo-mallmann.com

# Verificar registros DNS
nslookup joao-camilo-mallmann.com
```

### 5. **Verificar GitHub Pages Settings**

1. Vá em: Repositório → **Settings** → **Pages**
2. Verifique se:
   - ✅ Source: **Deploy from a branch**
   - ✅ Branch: **main** (ou gh-pages)
   - ✅ Folder: **/ (root)** ou **/dist**
   - ✅ Custom domain: **joao-camilo-mallmann.com**
   - ✅ Enforce HTTPS: **Habilitado**

---

## 🐛 Possíveis Causas do Erro 404

### Causa 1: Sitemap não foi copiado para dist/

**Solução:** Verificar se `public/sitemap.xml` está sendo copiado para `dist/sitemap.xml` após build

### Causa 2: GitHub Pages não está servindo arquivos corretamente

**Solução:**

- Verificar se há arquivo `.nojekyll` na raiz do dist
- Criar se não existir: `echo "" > dist/.nojekyll`

### Causa 3: CNAME estava vazio

**Solução:** ✅ Já corrigido! Agora contém `joao-camilo-mallmann.com`

### Causa 4: Propagação DNS

**Solução:** Aguardar 24-48h após mudanças de DNS

---

## 🔍 Debug

### Testar Sitemap Localmente

```bash
# Iniciar servidor local
bun run dev

# Em outro terminal, testar:
curl http://localhost:5173/sitemap.xml
```

### Verificar após Deploy

```bash
# Testar produção
curl https://joao-camilo-mallmann.com/sitemap.xml

# Verificar headers
curl -I https://joao-camilo-mallmann.com/sitemap.xml
```

**Headers esperados:**

```
HTTP/2 200
content-type: application/xml
cache-control: no-cache, no-store, must-revalidate
```

---

## 📊 Monitoramento Google Search Console

Após reenviar sitemap, você deve ver em 24-48h:

- ✅ **Status:** Sucesso
- ✅ **Páginas encontradas:** 3 (/, /dev, /editor)
- ✅ **Última leitura:** Data recente

---

## ⚠️ Se Erro Persistir

1. **Verificar se domínio está configurado corretamente no registrador**

   - Apontar para: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME www: `joao-camilo-mallmann.github.io`

2. **Verificar SSL/HTTPS**

   - GitHub Pages deve gerar certificado automaticamente
   - Pode levar até 24h

3. **Limpar Cache do Google**
   - Search Console → Inspeção de URL
   - Testar URL: `https://joao-camilo-mallmann.com/sitemap.xml`
   - Solicitar indexação

---

## 📝 Notas Importantes

- ✅ Sitemap atualizado com data: **2025-10-27**
- ✅ CNAME configurado corretamente
- ✅ Robots.txt apontando para sitemap correto
- ✅ MIME types adicionados ao .htaccess
- ✅ Vite configurado para copiar public dir

**Último Update:** 27 de Outubro de 2025
