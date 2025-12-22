## Objetivo rápido

Ajude a manter e desenvolver o site da Igreja Renovada (React + TypeScript + Vite + Tailwind). Priorize mudanças pequenas e seguras: correções visuais, componentes reutilizáveis em `src/components`, e ajustes nas integrações (Google Sheets, Player YouTube, WhatsApp).

## Panorama arquitetural (rápido)

- SPA React (React Router) em `src/`. Páginas principais estão em `src/pages/` — ex.: `Sermoes.tsx`, `Ministerios.tsx`, `Contato.tsx`.
- UI primitives e tokens em `src/components/ui/` (seguem convenções shadcn). Componentes específicos em `src/components/` (ex.: `Header.tsx`, `MobileHeader.tsx`, `HeroVideo.tsx`, `MinisteriosSection.tsx`).
- Dados: estáticos em `src/data/` (ex.: `sermons.ts`, `ministerios`); integrações dinâmicas via `src/services/googleSheetsService.ts` e hooks em `src/hooks/` (ex.: `useSermonData.ts`).
- Estilização: Tailwind + CSS variables definidos em `src/index.css` — `tailwind.config.ts` mapeia tokens (ex.: `church-primary`) para essas variáveis.

Por que essas decisões: design tokens + shadcn primitives garantem consistência visual; separar serviços/hooks mantém a UI desacoplada da fonte de dados.

## Comandos e fluxo de dev

- Instalar/develop: `npm install` then `npm run dev` — servidor Vite (padrão porta 5173, pode mudar via env).
- Build: `npm run build`; Preview: `npm run preview`.
- Lint/estilo: `npm run lint` (ESLint configurações do repo).

Debug rápido: abrir `http://localhost:5173` (ou porta mostrada pelo Vite). Use o modo responsivo do DevTools para testar header/mobile.

Nota: README menciona alternativas com `bun` — preferir `npm` a menos que o README diga o oposto.

## Refatoração: remoção de código morto (padrão)

Quando o objetivo for excluir códigos mortos (arquivos/exports não usados), siga este fluxo **sem mudar o UX** e com risco mínimo:

- Comece pelos entrypoints e rotas (o que define o bundle): `src/main.tsx` e `src/App.tsx`.
- Use **flags temporárias via CLI** (não mexer em `tsconfig*` a menos que seja pedido):
	- `npx tsc --noEmit --noUnusedLocals --noUnusedParameters`
- Use um grafo para detectar módulos órfãos:
	- `npx -y madge src --extensions ts,tsx --ts-config tsconfig.json --orphans`
- Faça limpeza **conservadora** em `src/components/ui/`:
	- Remova primeiro apenas demos/arquivos vazios/duplicatas claras.
	- Evite apagar componentes de UI só porque estão órfãos; faça em lotes pequenos (5–10) e valide.
- Valide a cada lote:
	- `npm run lint`
	- `npm run build`
- Não remover assets (`public/`, `src/assets/`) sem confirmar uso por import/strings/CSS.

## Padrões e convenções específicas deste projeto

- TypeScript obrigatório; novos componentes e hooks devem ser .tsx/.ts.
- UI: prefira componentes em `src/components/ui/` (shadcn); mantenha contratos/props originais ao refatorar.
- Tailwind + tokens: use classes utilitárias e tokens (ex.: `bg-church-primary`, `text-church-primary`). Para fundos de página use a convenção `bg-gradient-to-b from-white to-church-primary/25 dark:from-slate-900 dark:to-church-primary/20`.
- Border-radius padrão observado: `rounded-lg md:rounded-2xl xl:rounded-3xl` — mantenha padrões ao criar novos Cards/Buttons.
- Breakpoints: projeto usa Tailwind padrão (sm/md/lg/xl/2xl); não assumir breakpoint `xs` a menos que esteja definido em `tailwind.config.ts`.

Exemplos rápidos:
- Alterar header mobile behavior: `src/components/MobileHeader.tsx` (tem heurística de contraste com canvas/elementsFromPoint; mantenha event listeners e acessibilidade `aria-*`).
- Primary color fonte: `src/index.css` — atualizar HSL vars aqui para alterar tema global.

## Integrações e arquivos críticos

- Google Sheets: `src/services/googleSheetsService.ts` (+ `GOOGLE_SHEETS_SETUP.md`). Hooks que consomem dados: `src/hooks/useSermonData.ts`.
- Player: `react-player` usado em `src/components/HeroVideo.tsx`.
- WhatsApp float: `src/components/ui/whatsapp-float.tsx` (exemplo de botão flutuante com posicionamento e z-index).

## Visual / UX patterns a preservar

- Hero/headers: alguns headers são fixos; para que o hero comece atrás do header, o componente de página geralmente remove padding-top em mobile e aplica em xl (`pt-0 xl:pt-24`). Ver `src/pages/Sermoes.tsx` para exemplo.
- Texto sobre imagens: o projeto alterna entre sobrepor texto (absolute) e colocá-lo abaixo do hero; siga o padrão local do arquivo.
- CTA styles: `bg-church-primary` (principal), `hover:bg-church-primary-dark`, `text-church-primary` para outlined variants.

## Code smells / armadilhas comuns

- Evite editar `public/` sem atualizar referências em `src/` (imagens são referenciadas por caminho relativo). 
- Mudanças massivas de classes Tailwind via grep/replace podem quebrar JSX (fechamento de tags) — edições locais manuais são preferíveis.
- Canvas sampling in `MobileHeader` pode falhar por CORS em vídeos externos — mantenha fallback seguro.

## PR checklist (curto)

1. Pequeno e focado: um problema por PR.
2. Rodar `npm run lint` antes de abrir PR.
3. Incluir antes/depois (screenshot) para mudanças visuais.
4. Evitar mudanças globais em tokens sem coordenar (ex.: `src/index.css` HSL vars).

## Onde procurar mais contexto

- Scripts/deps: `package.json`
- Tokens/cores: `src/index.css`, `tailwind.config.ts`
- UI primitives: `src/components/ui/` (buttons/cards/toast)
- Dados: `src/data/` e `src/services/googleSheetsService.ts`

Se quiser, eu adapto este arquivo (menos/more verboso) com exemplos de commits ou snippets de modificação (ex.: como alterar a cor primária em `src/index.css`). Diga o foco que prefere.
