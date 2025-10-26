## Objetivo rápido

Ajude a manter e desenvolver o site da Igreja Renovada (React + TypeScript + Vite + Tailwind).
Priorize alterações pequenas e seguras: corrigir bugs visuais, componentes reutilizáveis em `src/components`, e ajustes nas integrações (Google Sheets, Player YouTube, WhatsApp).

## Arquitetura — grande panorama

- Frontend single-page em `src/` com rotas (React Router). Páginas principais: `src/pages/Principal.tsx`, `src/pages/Sermoes.tsx`, `src/pages/Ministerios.tsx`.
- Componentes reutilizáveis em `src/components/`; primitives e tokens do design system em `src/components/ui/` (shadcn/ui-style).
- Dados dinâmicos vindos de Google Sheets via `src/services/googleSheetsService.ts` e hooks (`src/hooks/useSermonData.ts`). Dados estáticos em `src/data/` (p.ex. `ministerios.ts`, `sermons.ts`).
- Assets públicos em `public/` (imagens de ministérios, séries) — não altere caminhos públicos sem atualizar referências nos componentes.

## Comandos úteis (extraia do `package.json`)

- `npm run dev` — servidor de desenvolvimento (Vite). Porta padrão: 5173.
- `npm run build` — build de produção (gera `dist/`).
- `npm run preview` — preview da build local.
- `npm run lint` — rodar ESLint.

Nota: o README contém instruções alternativas com `bun` e deploys (Vercel/Netlify). Verifique `.env` e `GOOGLE_SHEETS_SETUP.md` para integrações.

## Padrões e convenções do projeto

- TypeScript obrigatório para novos componentes e hooks.
- Componentes pequenos e focados: extraia partes repetidas para `src/components/ui/`.
- Estilização via Tailwind — use classes utilitárias e tokens existentes; evite CSS global a menos que necessário (`index.css`/`App.css` já existem).
- Icons via `lucide-react`; player via `react-player` (ver `src/components/HeroVideo.tsx`).
- Evite alterações diretas em `public/` sem versão/backup; imagens referenciadas em `src` esperam caminhos relativos a `public/`.

## Integrações e variáveis de ambiente

- Google Sheets: configuração e credenciais documentadas em `GOOGLE_SHEETS_SETUP.md`. Serviço central: `src/services/googleSheetsService.ts`.
- Variáveis de ambiente prefixadas com `VITE_` (ex.: `VITE_GOOGLE_SHEETS_API_KEY`) — uso seguro esperado via `.env.local`.

## Exemplos rápidos (onde editar o quê)

- Atualizar cabeçalho/navegação: `src/components/Header.tsx`
- Ajustar hero ou player principal: `src/components/HeroVideo.tsx`
- Editar seção de ministérios: `src/components/MinisteriosSection.tsx` e dados em `src/data/ministerios.ts`
- Atualizar rotas/páginas: `src/pages/Principal.tsx`, `src/pages/Sermoes.tsx`

## Restrições e pontos de atenção

- Não exponha chaves secretas diretamente no repo; sempre usar variáveis `VITE_` e instruir o deploy a configurá-las.
- Mantenha acessibilidade (a11y) especialmente nos componentes de mídia (player) e navegação.
- A base de componentes `src/components/ui/` segue convenções shadcn — preserve suas props e contratos ao refatorar.

## Onde procurar contexto rápido

- Scripts e dependências: `package.json`
- Integração de dados: `src/services/googleSheetsService.ts` e `GOOGLE_SHEETS_SETUP.md`
- Componentes base/UI: `src/components/ui/` e `src/components/*` (ex.: `button.tsx`, `card.tsx`, `whatsapp-float.tsx`)
- Dados de amostra: `src/data/ministerios.ts`, `src/data/sermons.ts`

## Quando abrir PRs (guidelines mínimas)

- Mantenha PRs pequenos e com descrição clara do impacto (arquitetura, rota, conteúdo, assets).
- Inclua antes/depois (screenshots) para mudanças visuais relevantes.
- Rode `npm run lint` antes de enviar; explique se precisar ignorar uma regra.

## Perguntas/Feedback

Se algo aqui estiver incompleto ou incorreto, diga o arquivo/trecho que faltou e eu atualizo este guia. Quer que eu acrescente seções de exemplos de commits ou templates de PR?
