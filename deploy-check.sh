#!/bin/bash

# 🚀 Script para Deploy com Sitemap Corrigido
# Execute este script para fazer deploy com todas correções aplicadas

echo "📦 Fazendo build do projeto..."
bun run build

echo ""
echo "✅ Verificando arquivos essenciais no dist/..."
echo ""

if [ -f "dist/sitemap.xml" ]; then
    echo "✅ sitemap.xml - OK"
else
    echo "❌ sitemap.xml - FALTANDO!"
fi

if [ -f "dist/robots.txt" ]; then
    echo "✅ robots.txt - OK"
else
    echo "❌ robots.txt - FALTANDO!"
fi

if [ -f "dist/CNAME" ]; then
    echo "✅ CNAME - OK"
    echo "   Conteúdo: $(cat dist/CNAME)"
else
    echo "❌ CNAME - FALTANDO!"
fi

if [ -f "dist/.nojekyll" ]; then
    echo "✅ .nojekyll - OK"
else
    echo "❌ .nojekyll - FALTANDO!"
fi

if [ -f "dist/.htaccess" ]; then
    echo "✅ .htaccess - OK"
else
    echo "❌ .htaccess - FALTANDO!"
fi

echo ""
echo "🔍 Testando URLs que devem funcionar após deploy:"
echo "   https://joao-camilo-mallmann.com/"
echo "   https://joao-camilo-mallmann.com/sitemap.xml"
echo "   https://joao-camilo-mallmann.com/robots.txt"
echo ""
echo "📝 Próximos passos:"
echo "   1. Fazer commit: git add . && git commit -m 'fix: Corrigir sitemap e SEO'"
echo "   2. Fazer push: git push origin main"
echo "   3. Aguardar deploy do GitHub Pages (2-5 minutos)"
echo "   4. Testar: curl https://joao-camilo-mallmann.com/sitemap.xml"
echo "   5. Google Search Console → Remover sitemap antigo → Adicionar novamente"
echo ""
echo "⏰ Aguarde 24-48h para Google processar o sitemap"
echo ""
