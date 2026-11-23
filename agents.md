# Regras do Projeto

Este documento é o índice central das regras e convenções do projeto. Cada seção está detalhada em seu próprio arquivo dentro de `docs/`.

## Índice de Regras

| #   | Regra                                       | Arquivo                                                            |
| --- | ------------------------------------------- | ------------------------------------------------------------------ |
| 1   | Estrutura de Arquivos e Componentes Vue     | [docs/estrutura-e-componentes.md](docs/estrutura-e-componentes.md) |
| 2   | Estilização (Tailwind v4, Cores, Animações) | [docs/estilizacao.md](docs/estilizacao.md)                         |
| 3   | Código, Ferramentas e Configuração          | [docs/codigo-e-ferramentas.md](docs/codigo-e-ferramentas.md)       |
| 4   | Acessibilidade e SEO                        | [docs/acessibilidade-e-seo.md](docs/acessibilidade-e-seo.md)       |
| 5   | i18n                                        | [docs/i18n.md](docs/i18n.md)                                       |
| 6   | Scroll e Animações (Vue Motion)             | [docs/scroll-e-animacoes.md](docs/scroll-e-animacoes.md)           |
| 7   | Polimento de Interface (UI/UX)              | [docs/polimento-ui.md](docs/polimento-ui.md)                       |

## Dados Sincronizados (Perfil Dev)

- Os dados públicos de perfil, experiência Dev, projetos, certificações e links de contato da área Dev/Contato vêm de `src/data/profile.generated.json` (gerado automaticamente a partir da fonte única de perfil).
- **Regra de privacidade (repositório público):** nunca commitar ou incluir em `src/data/profile.generated.json` (ou em qualquer arquivo deste repositório) número de telefone, endereço residencial, pretensão salarial, status de busca de emprego, notas internas ou caminhos locais da máquina.
- Nunca importe arquivos fora deste repositório dentro de `src/` (o build do GitHub Actions precisa rodar isolado).
- Para atualizar e sincronizar a partir da fonte única: `bun run sync:profile` (ou `bun run sync:agy "sua alteração"` com **Gemini 4 Neon High**).

---

**Última atualização:** Agosto 2026
**Versão do Tailwind CSS:** v4
**Versão do Vue:** 3 (Composition API)
**Gerenciador de Pacotes:** BUN
