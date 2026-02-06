🚀 Portfolio v2 - Blueprint Estratégico e Técnico (Master)

Visão Geral: Plataforma de portfolio de alta conversão utilizando a estratégia de "Bifurcação de Autoridade".
Objetivo: Eliminar a ambiguidade profissional inerente a perfis multidisciplinares. Posicionar o perfil como Desenvolvedor Full Stack Pleno (foco em arquitetura, CI/CD, modernização de legados e performance) e Editor de Vídeo Profissional (foco em retenção, ritmo e storytelling comercial).
Stack: Vue 3 (Options API), PrimeVue, Tailwind v4, Bun.

1. Arquitetura de Conversão e Fluxo de Navegação

O site transcende a função de um cartão de visita digital tradicional, atuando como um Gateway Inteligente e Estratégico. A arquitetura foi desenhada para resolver o problema clássico de perfis "T-Shaped": a diluição da autoridade. Ao invés de apresentar todas as competências misturadas, o sistema valida imediatamente as duas áreas de competência em ambientes isolados, evitando confusão cognitiva e direcionando o recrutador ou cliente para o funil exato que procura.

Diagrama de Fluxo Detalhado

O fluxo foi desenhado para minimizar cliques até à conversão (WhatsApp) e maximizar a prova de autoridade.

graph TD
    User((Visitante/Recrutador)) -->|Acessa URL| Home[HOME (/)]
    
    subgraph "Portal de Decisão (The Gateway)"
    Home -->|Identifica Necessidade Técnica| DevPath{Caminho DEV}
    Home -->|Identifica Necessidade Visual/Criativa| EditorPath{Caminho EDITOR}
    end
    
    subgraph "Funil DEV (Autoridade Plena)"
    DevPath -->|Ambiente: Azul/Tech/Clean| DevPage[View: /dev]
    DevPage -->|Prova 1: Sistemas Complexos| DevProjects[Grid: SMU, Travel Mate, Vimasi]
    DevPage -->|Prova 2: Domínio de Ferramentas| DevStack[Terminal Interativo: CI/CD, Tests, Docker]
    DevStack -->|Conversão| WppDev[Mensagem Personalizada: 'Busco dev Pleno...']
    end
    
    subgraph "Funil EDITOR (Autoridade Pro)"
    EditorPath -->|Ambiente: Laranja/Cinematic/Dark| EditorPage[View: /editor]
    EditorPage -->|Prova 1: Capacidade Narrativa| EditorReel[Destaque: Showreel/Roteiro]
    EditorPage -->|Prova 2: Versatilidade de Nicho| EditorGallery[Grid: Gaming, Finance, Edu]
    EditorGallery -->|Conversão| WppEditor[Mensagem Personalizada: 'Busco editor Pro...']
    end
    
    style Home fill:#09090b,stroke:#fff,stroke-width:2px
    style DevPage fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px
    style EditorPage fill:#7c2d12,stroke:#f97316,stroke-width:2px


2. Estratégia UX/UI Multi-Plataforma

A interface adapta-se não só ao tamanho do ecrã, mas fundamentalmente ao modelo de interação (Touch vs. Mouse) e ao contexto psicológico do utilizador em cada dispositivo.

📱 Mobile (Touch-First & Thumb-Driven)

Dado que uma grande parte do tráfego (especialmente vindo de redes sociais) será móvel, a usabilidade é crítica.

Arquitetura de "Thumb Zone": Elementos de interação crítica (CTAs principais e navegação de retorno) devem residir no terço inferior do ecrã, zona de conforto natural para uso com uma mão.

Stack Vertical na Home: Ao invés de um carrossel ou elementos lado a lado reduzidos, os Cards Dev/Editor são empilhados verticalmente ocupando 100% da largura. Isso elimina toques acidentais ("Fat Finger Syndrome") e obriga o utilizador a focar numa opção de cada vez.

Informação Explicita (Sem Hover): Efeitos de hover não existem em touch. Informações que estariam ocultas em desktop devem estar sempre visíveis ou acessíveis através de um toque evidente (ex: ícones com labels).

Alvos de Toque Seguros: Altura mínima de 44px (padrão iOS) ou 48px (padrão Android) em todos os botões e áreas clicáveis.

💻 Desktop (Imersivo & Mouse-Driven)

No desktop, o foco é a imersão e a demonstração de refinamento técnico através de micro-interações.

Split-Screen na Home: Layout robusto com Cards lado a lado, criando uma bifurcação visual clara e impactante.

Micro-interações Avançadas (Hover States):

Cursor Dev: Ao passar sobre a área Dev, o cursor pode mudar para um estilo "caret" de texto ou terminal, sugerindo código.

Cursor Editor: Ao passar sobre a área Editor, o cursor muda para um estilo de "Play" ou "Rec", sugerindo mídia.

Feedback Visual: Bordas brilham (glow effects) nas cores respectivas (Azul/Laranja) ao passar o mouse, antecipando a ação.

Acessibilidade e Navegação por Teclado: Garantia de foco visível (tabindex, focus-visible) para que recrutadores possam navegar rapidamente usando Tab e Enter.

3. Regras Técnicas Absolutas

⚠️ Estas regras formam a base da manutenibilidade e performance do projeto. Violações exigem refatoração imediata.

Vue.js Core: Utilização estrita da Options API (data, methods, computed, lifecycle hooks).

Motivo: Embora a Composition API seja uma competência dominada (citada no CV), para este projeto específico, a Options API oferece uma estrutura mais clara e declarativa para componentes de apresentação, facilitando a leitura rápida. ❌ Composition API (setup) proibida no código fonte.

UI Kit Padronizado: Uso mandatório do PrimeVue para componentes base (Card, Button, Timeline, Dialog).

Motivo: Evitar "reinventar a roda" em componentes complexos e garantir acessibilidade (WAI-ARIA) nativa.

CSS Engine: Tailwind CSS v4 configurado exclusivamente via diretiva @theme no arquivo CSS principal.

Motivo: A versão 4 do Tailwind elimina a necessidade de ficheiros de configuração JavaScript (tailwind.config.js), tornando o build mais rápido e a configuração mais próxima do CSS nativo.

Cores Semânticas: Proibido o uso de Hexadecimais hardcoded no HTML.

Uso Correto: Classes como text-dev, bg-editor, border-dev-surface.

Motivo: Facilita a manutenção global do tema e ajustes de Dark Mode num único ponto de verdade (main.css).

Runtime & Tooling: Uso exclusivo do Bun (instalação de pacotes, execução de scripts, testes).

Motivo: Performance superior ao Node.js/npm e alinhamento com a stack moderna citada no currículo.

Code Quality: ESLint 9+ com configuração "Flat Config" (eslint.config.js).

Motivo: Padrão moderno do ecossistema JavaScript, garantindo consistência e prevenindo erros de sintaxe e estilo.

4. Design System & CSS (src/assets/main.css)

Este arquivo atua como a fonte da verdade para o design system. Copiar este conteúdo exato.

@import "tailwindcss";
@import "primeicons/primeicons.css";

@theme {
  /* 🔵 PALETA DEV (Azul Tech - Confiança Plena & Estabilidade) */
  /* Psicologia: Azul transmite lógica, comunicação clara e tecnologia corporativa */
  --color-dev: #3b82f6;          /* Azul Vibrante (Primary Action) */
  --color-dev-dark: #172554;     /* Azul Profundo (Background Sections) */
  --color-dev-surface: #1e3a8a;  /* Azul Surface (Cards/Containers) */
  --color-dev-text: #eff6ff;     /* Texto Contraste (High Legibility) */

  /* 🟠 PALETA EDITOR (Laranja Criativo - Energia Pro & Dinamismo) */
  /* Psicologia: Laranja transmite criatividade, entusiasmo e estímulo visual */
  --color-editor: #f97316;       /* Laranja Vibrante (Primary Action) */
  --color-editor-dark: #431407;  /* Marrom/Laranja Escuro (Background Cinematic) */
  --color-editor-surface: #7c2d12; /* Laranja Surface (Cards/Containers) */
  --color-editor-text: #fff7ed;  /* Texto Contraste */

  /* ⚫ BASE (Neutro - Dark Mode Profundo) */
  --color-background: #09090b;   /* Preto quase absoluto (OLED friendly) */
  --color-text-main: #ffffff;    /* Texto Principal */
  --color-text-muted: #a1a1aa;   /* Cinza médio para hierarquia visual */
  
  /* 📐 Espaçamentos e Layout */
  --spacing-safe-mobile: 2rem;   /* Margem de segurança para mobile */
}

/* Reset Global e Tipografia */
body {
  background-color: var(--color-background);
  color: var(--color-text-main);
  font-family: 'Inter', system-ui, -apple-system, sans-serif; /* Fonte limpa e moderna */
  margin: 0;
  -webkit-font-smoothing: antialiased; /* Renderização de fonte nítida */
}

/* Utilitários de Animação */
.animate-entry {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Customização Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-background);
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}


5. Estrutura de Diretórios Otimizada

A estrutura reflete uma organização modular e escalável, separando responsabilidades.

portfolio-v2/
├── src/
│   ├── assets/
│   │   ├── main.css            # Definições globais, @theme e resets
│   │   └── images/             # Assets otimizados (webp/svg)
│   ├── components/
│   │   ├── layout/
│   │   │   └── NavBack.vue     # Botão voltar reutilizável (Responsivo)
│   │   └── ui/                 # Componentes de UI menores (se necessário)
│   ├── router/
│   │   └── index.js            # Definição de Rotas: /, /dev, /editor e Guards
│   ├── views/
│   │   ├── HomeView.vue        # Gateway Responsivo (Landing Page)
│   │   ├── DevView.vue         # Funil Dev Pleno (Tech Stack)
│   │   └── EditorView.vue      # Funil Editor Pro (Creative Stack)
│   ├── App.vue                 # Componente Raiz (Transitions)
│   └── main.js                 # Entry Point (PrimeVue setup)
├── eslint.config.js            # Configuração Moderna (Flat Config)
├── vite.config.js              # Configuração de Build (Alias, Plugins)
└── package.json                # Dependências e Scripts Bun


6. Detalhamento Estratégico das Views (Atualizado com Currículo 2024/25)

Cada View tem um propósito narrativo específico, utilizando os dados reais extraídos do currículo e portfólio anterior.

🏠 HomeView.vue (O Gateway)

O objetivo é a clareza imediata. O utilizador deve sentir que encontrou um profissional completo, mas organizado.

Headline: "João Camilo".

Sub-headline: "Software Engineer & Video Creator".

Layout Adaptativo:

Mobile: Scroll vertical fluido. Cards ocupam 100% da largura para facilitar o toque.

Desktop: Grid de 2 colunas centralizado, ocupando a viewport.

Card Dev (Esquerda/Topo):

Ícone: <i class="pi pi-code"></i> (Tamanho XL).

Cor de Acento: text-dev (Azul).

Borda: border-dev (Sutil em repouso, brilhante em hover).

Microcopy: "Arquitetura de Software & Soluções Escaláveis".

Card Editor (Direita/Baixo):

Ícone: <i class="pi pi-video"></i> (Tamanho XL).

Cor de Acento: text-editor (Laranja).

Borda: border-editor (Sutil em repouso, brilhante em hover).

Microcopy: "Narrativas Visuais & Produção de Conteúdo".

💻 DevView.vue (O Funil Pleno)

Foco na prova de capacidade técnica avançada, alinhada com a experiência na Liquid Soluções em TI.

Copy Hero: "Engenharia de Software, Arquitetura Limpa & Sistemas de Alta Performance".

Bio Técnica (Resume-Based):
"Desenvolvedor Full Stack com forte atuação na Liquid Soluções em TI. Especialista na modernização estratégica de sistemas legados (migração PHP -> TS/Node) e arquitetura de SPAs escaláveis. Foco em Clean Architecture, pipelines de CI/CD robustos e metodologias AI-Driven Development para eficiência."

Terminal Visual Interativo (Skills Reais):
Um componente visual que simula um terminal ZSH, mostrando comandos que validam a senioridade:

> docker compose up -d postgres redis
> bun run test:e2e --headless
> git commit -m "feat(core): websocket real-time dashboard implementation"
> deploy --env=production


Grid de Projetos (Dados Reais):

SMU (Sistema de Mobilidade Urbana): Dashboard Crítico & Real-time. "Painel administrativo complexo. Implementação de WebSockets para streaming massivo de dados geoespaciais (frota e agentes) em tempo real. Otimização de renderização de mapas com latência próxima de zero." (Tech: Vue 3, WebSockets, Google Maps API, Pinia).

Vimasi Vedações: SPA Institucional de Alta Performance. "Aplicação focada obsessivamente em SEO técnico e Core Web Vitals. Arquitetura de componentes reutilizáveis para conversão de clientes." (Tech: Nuxt.js, SEO, Tailwind).

Travel Mate: Plataforma Full Stack. "Sistema completo para agência de turismo. Backend robusto em Node.js/Express, base de dados SQL e deploy automatizado em Railway." (Tech: Node.js, Express, SQL, Docker).

CTA Final: Botão WhatsApp flutuante ou fixo ("Vi seu portfolio Dev e busco um perfil Pleno...").

🎬 EditorView.vue (O Funil Pro)

Foco na retenção, qualidade visual e capacidade de contar histórias que vendem.

Copy Hero: "Narrativas Visuais que Geram Retenção, Engajamento e Vendas".

Stack Criativa Visual: Ícones ou Tags estilizadas para: Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Audition.

Secção de Processo: Um Timeline (PrimeVue) simples destacando o fluxo profissional: "Estratégia/Roteiro -> Edição/Ritmo -> Pós-Produção/Color Grading".

Galeria de Trabalhos (Dados Reais):

Gaming & Análise Narrativa: "Um jogo sobre Redenção (RDR2)" - Demonstra capacidade de roteiro profundo e montagem emocional.

Finance & Tech (Educação): "O novo ouro (Bitcoin)" - Demonstra uso de motion graphics explicativo para simplificar conceitos complexos.

Lifestyle & Desenvolvimento Pessoal: "Qual é o SEU Tipo de Amor?" - Demonstra dinamismo, ritmo rápido e conexão com o público jovem.

CTA Final: Botão WhatsApp com cor Laranja ("Vi seu portfolio Editor e preciso de um vídeo...").

7. Configurações de Infraestrutura

Configurações essenciais para garantir que o ambiente de desenvolvimento seja moderno e rápido.

package.json (Scripts Bun & Dependências)

{
  "name": "portfolio-v2",
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --fix",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "primevue": "^4.0.0",
    "primeicons": "^7.0.0",
    "@primeuix/themes": "^1.0.0",
    "vue": "^3.4.0",
    "vue-router": "^4.3.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "vite": "^5.2.0",
    "eslint": "^9.0.0",
    "eslint-plugin-vue": "^9.23.0",
    "@vue/eslint-config-prettier": "^9.0.0",
    "prettier": "^3.2.5",
    "globals": "^15.0.0"
  }
}


eslint.config.js (Flat Config Moderno)

import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  // Configurações Base Recomendadas
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'], // Nível Recommended para maior rigor
  
  // Integração com Prettier (Desativa formatação do ESLint)
  skipFormatting,
  
  // Regras Customizadas
  {
    rules: {
      'vue/multi-word-component-names': 'off', // Permite nomes simples como 'Login.vue'
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
]


8. Checklist de Implementação e Lançamento

[ ] Setup Inicial: Executar bun create vite -> Selecionar Vue -> Entrar na pasta.

[ ] Limpeza de Arquivos: Remover HelloWorld.vue, style.css padrão e assets de exemplo.

[ ] Instalação Tailwind v4: Instalar pacote e configurar o arquivo src/assets/main.css com o bloco @theme.

[ ] Configuração PrimeVue: Instalar e registrar no main.js com o tema Aura (modo dark).

[ ] Content Entry (Crítico): Copiar os textos, títulos e descrições técnicas dos projetos listados acima para os arrays data() dentro das Views DevView.vue e EditorView.vue.

[ ] Gestão de Assets: Baixar ou criar thumbnails representativas para os vídeos listados (RDR2, Bitcoin) e screenshots para os softwares (SMU, Travel Mate).

[ ] Mobile QA (Quality Assurance): Testar rigorosamente a responsividade dos Cards de Projetos em resoluções móveis (375px+).

[ ] Linting Final: Rodar bun lint para garantir zero erros antes do deploy.

[ ] Deploy: Realizar o build (bun run build) e deploy (ex: Vercel/Netlify/GitHub Pages).