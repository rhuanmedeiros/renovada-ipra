# Paleta de Cores do Projeto - Igreja Renovada

## Cor Base
- **#009BDE** - Cor principal do projeto

## Paleta Completa - Modo Claro

### Cores Primárias (Church Brand)
- `--church-primary`: HSL(198, 100%, 44%) → **#009BDE**
- `--church-primary-light`: HSL(198, 85%, 55%) → **#26A9E3**
- `--church-primary-lighter`: HSL(198, 70%, 85%) → **#8BD4F2**
- `--church-primary-dark`: HSL(198, 100%, 35%) → **#0078B3**
- `--church-primary-darker`: HSL(198, 100%, 25%) → **#005580**

### Cores Semânticas
- `--primary`: HSL(198, 100%, 44%) → **#009BDE**
- `--secondary`: HSL(198, 70%, 85%) → **#8BD4F2**
- `--accent`: HSL(198, 85%, 55%) → **#26A9E3**

## Paleta Completa - Modo Escuro

### Cores Primárias Ajustadas para Escuro
- `--church-primary`: HSL(198, 100%, 55%) → **#1AB3E8**
- `--church-primary-light`: HSL(198, 85%, 65%) → **#4DC3ED**
- `--church-primary-lighter`: HSL(198, 70%, 75%) → **#7AD3F2**
- `--church-primary-dark`: HSL(198, 100%, 44%) → **#009BDE**
- `--church-primary-darker`: HSL(198, 100%, 35%) → **#0078B3**

### Cores de Background
- **Modo Claro**: HSL(0, 0%, 100%) → **#FFFFFF**
- **Modo Escuro**: HSL(220, 15%, 8%) → **#131419**

### Cores de Texto
- **Modo Claro**: HSL(220, 9%, 15%) → **#222427**
- **Modo Escuro**: HSL(0, 0%, 95%) → **#F2F2F2**

## Implementação

### CSS Custom Properties
As cores são definidas usando CSS custom properties no arquivo `src/index.css`:

```css
:root {
  --church-primary: 198 100% 44%;
  /* ... outras cores */
}

.dark {
  --church-primary: 198 100% 55%;
  /* ... outras cores ajustadas */
}
```

### Classes Tailwind Disponíveis
- `bg-church-primary` - Background com cor primária
- `text-church-primary` - Texto com cor primária
- `border-church-primary` - Borda com cor primária
- `bg-church-primary-light` - Background com variação mais clara
- `bg-church-primary-dark` - Background com variação mais escura

### Toggle de Tema
O componente `ThemeToggle` permite alternar entre modo claro e escuro:
- Salva preferência no localStorage
- Respeita preferência do sistema
- Transições suaves entre temas