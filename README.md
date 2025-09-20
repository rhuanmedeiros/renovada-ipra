# 🏛️ Igreja Renovada - Website Oficial

Site oficial da Igreja Renovada, localizada em Astorga, PR. Uma plataforma moderna desenvolvida com React, TypeScript e Tailwind CSS para conectar a comunidade, compartilhar conteúdo inspiracional e facilitar a participação nos eventos da igreja.

## ✨ Funcionalidades

### 🎯 Principais
- **Hero Dinâmico**: Seção principal com vídeo de apresentação e design responsivo
- **Player de Vídeo**: Integração com YouTube usando React Player para transmissões
- **Mosaico Social**: Sistema preparado para exibição de postagens do Instagram
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **WhatsApp Float**: Botão flutuante para contato direto

### 📱 Páginas e Seções
- **Página Principal**: Hero com vídeo, apresentação e cards dos ministérios
- **Ministérios**: Jovens, Infantil e Casais com informações detalhadas
- **Sermões**: Série bíblica atual e arquivo de mensagens
- **Doações**: Sistema para contribuições e ofertas
- **Contato**: Localização, horários e formas de comunicação

## 🎨 Design System & Paleta de Cores

### Cores Principais
Consulte o arquivo [`PALETA_CORES.md`](PALETA_CORES.md) para a paleta completa.

- **Azul Igreja**: Tons de azul para elementos principais
- **Roxo Inspiração**: Gradientes e destaques especiais  
- **Branco Puro**: Backgrounds e textos claros
- **Cinza Elegante**: Textos secundários e bordas

### Componentes UI
- **Bordas**: Sistema de border-radius (rounded-lg, rounded-xl)
- **Sombras**: Elevação consistente (shadow-sm até shadow-2xl)
- **Tipografia**: Hierarquia clara com font-weights variados
- **Espaçamento**: Grid baseado em múltiplos de 4px (Tailwind)

## 📱 Integrações Configuradas

### Google Sheets
Integração preparada para dados dinâmicos:
- Sermões e séries bíblicas
- Eventos e programação
- Informações dos ministérios

### Redes Sociais
- **Instagram**: Mosaico de postagens (configuração em `WHATSAPP_COMPONENT.md`)
- **WhatsApp**: Botão flutuante para contato direto
- **YouTube**: Player integrado para transmissões

### APIs Externas
Consulte [`GOOGLE_SHEETS_SETUP.md`](GOOGLE_SHEETS_SETUP.md) para configuração detalhada.

## 🚀 Deploy & Produção

### Vercel (Recomendado)
```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
npm run build
# Upload da pasta dist/ no painel da Netlify
```

### Build Local
```bash
npm run build    # Gera pasta dist/
npm run preview  # Testa build localmente
```

## 🚀 Começando

### Pré-requisitos
- **Node.js 18+** (recomendado instalar via [nvm](https://github.com/nvm-sh/nvm))
- **npm** ou **bun** (para melhor performance)
- Git para controle de versão

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rhuanmedeiros/renovada-4803e07a.git
   cd renovada-4803e07a
   ```

2. **Instale as dependências**
   ```bash
   # Com npm
   npm install
   
   # Ou com bun (mais rápido)
   bun install
   ```

3. **Configure variáveis de ambiente** (opcional)
   ```bash
   cp .env.example .env.local
   ```
   
   Configure as integrações no `.env.local`:
   ```env
   VITE_GOOGLE_SHEETS_API_KEY=sua_chave_aqui
   VITE_INSTAGRAM_ACCESS_TOKEN=token_instagram
   VITE_YOUTUBE_API_KEY=chave_youtube
   ```

4. **Execute o projeto**
   ```bash
   # Desenvolvimento
   npm run dev
   # ou
   bun run dev
   ```

5. **Acesse** http://localhost:5173

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção  
npm run preview      # Preview da build
npm run lint         # Análise de código com ESLint
```

## 🛠️ Tecnologias Utilizadas

### Frontend Core
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática para maior robustez
- **Vite** - Build tool moderna e extremamente rápida
- **Tailwind CSS** - Framework CSS utilitário para estilização

### UI & Componentes
- **shadcn/ui** - Componentes de UI modernos e acessíveis
- **Lucide React** - Biblioteca de ícones SVG otimizados
- **React Player** - Player de vídeo com suporte a YouTube
- **Framer Motion** - Animações fluidas e interativas (preparado)

### Integrações & Serviços
- **Google Sheets API** - Integração com planilhas para dados dinâmicos
- **Instagram Basic Display API** - Mosaico de postagens sociais (preparado)
- **WhatsApp API** - Contato direto via botão flutuante

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e análise estática de código
- **PostCSS** - Processamento avançado de CSS
- **Bun** - Runtime alternativo para melhor performance (configurado)

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ui/                 # Componentes shadcn/ui base
│   │   ├── button.tsx      # Botões personalizados
│   │   ├── card.tsx        # Cards informativos
│   │   ├── whatsapp-float.tsx # Botão WhatsApp flutuante
│   │   └── ...             # Outros componentes UI
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé com contatos
│   ├── HeroVideo.tsx       # Player de vídeo principal
│   ├── CardsIniciais.tsx   # Cards da página inicial
│   ├── MinisteriosSection.tsx # Seção de ministérios
│   └── SermonSeries.tsx    # Componente de séries
├── pages/                  # Páginas principais
│   ├── Principal.tsx       # Página inicial
│   ├── Ministerios.tsx     # Página de ministérios
│   ├── Sermoes.tsx         # Arquivo de sermões
│   ├── Doacoes.tsx         # Página de doações
│   └── NotFound.tsx        # Página 404
├── data/                   # Dados estáticos e configurações
│   ├── ministerios.ts      # Informações dos ministérios
│   └── sermons.ts          # Dados dos sermões
├── hooks/                  # Custom hooks React
│   ├── useSermonData.ts    # Hook para dados de sermões
│   ├── useScrollToTop.ts   # Hook de scroll
│   └── use-mobile.tsx      # Hook responsivo
├── services/               # Integrações com APIs externas
│   └── googleSheetsService.ts # Serviço Google Sheets
├── lib/                    # Utilitários e helpers
│   └── utils.ts            # Funções utilitárias
└── assets/                 # Recursos estáticos
public/
├── ministerios/            # Imagens dos ministérios
├── Series/                 # Imagens das séries bíblicas
└── ...                     # Outros assets públicos
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
4. **Implemente** suas mudanças seguindo os padrões do projeto
5. **Commit** suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
6. **Push** para sua branch:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
7. **Abra** um Pull Request

### Padrões de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug  
- `docs:` Documentação
- `style:` Formatação/estilo
- `refactor:` Refatoração de código
- `test:` Adição de testes

### Guidelines
- Use TypeScript para tipagem estática
- Siga os padrões do ESLint configurado
- Mantenha componentes pequenos e reutilizáveis
- Documente mudanças significativas

## 📞 Informações de Contato

### Igreja Renovada - Astorga, PR

**📍 Endereço**: Camilo Ramalho Matta 181, Astorga, PR, 86730-000  
**📱 Telefone**: +55 44 9861-9596  
**✉️ Email**: contato@renovada.org  

**🕐 Horários de Culto**:
- Domingos: 10h e 18h
- Terça-feira (Oração): 18:30h

**🌐 Redes Sociais**:
- Instagram: [@igrejarenovada](https://instagram.com/igrejarenovada)
- YouTube: [Igreja Renovada](https://youtube.com/@igrejarenovada)  
- Facebook: [Igreja Renovada Astorga](https://facebook.com/igrejarenovada)

## 📄 Licença & Créditos

Este projeto é desenvolvido especialmente para a **Igreja Renovada** de Astorga, PR.

**Desenvolvimento**: Equipe técnica da Igreja Renovada  
**Design**: Baseado em princípios modernos de UX/UI  
**Manutenção**: Comunidade da Igreja Renovada

---

**Feito com ❤️ para a glória de Deus | Igreja Renovada - Astorga, PR**
