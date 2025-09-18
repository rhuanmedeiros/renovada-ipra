# Site da Igreja Renovada

## Sobre o Projeto

Este é o site oficial da **Igreja Renovada**, localizada em Astorga, PR. O projeto foi desenvolvido para apresentar a igreja, seus ministérios, horários de culto e facilitar o contato com a comunidade.

## Características do Site

- **Página Principal**: Apresentação da igreja com vídeo de boas-vindas e cards dos ministérios
- **Seção de Ministérios**: Informações sobre os ministérios de Jovens, Infantil e Casais
- **Série Atual**: Destaque para a série bíblica em andamento
- **Informações de Contato**: Endereço, telefone, email e horários de culto
- **Design Responsivo**: Adaptado para desktop e dispositivos móveis
- **Interface Moderna**: Utilizando componentes shadcn/ui com Tailwind CSS

## Informações da Igreja

**Endereço**: Camilo Ramalho Matta 181, Astorga, PR, Brazil, 86730-000  
**Telefone**: +55 44 9861-9596  
**Email**: contato@renovada.org  

**Horários**:
- Cultos Domingo: 10h e 18h
- Oração Terça: 18:30

## Como executar o projeto

### Pré-requisitos

- Node.js (recomendado instalar via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm

### Instalação e execução

```sh
# Clone o repositório
git clone https://github.com/rhuanmedeiros/renovada-4803e07a.git

# Navegue até o diretório do projeto
cd renovada-4803e07a

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## Tecnologias Utilizadas

Este projeto foi construído com:

- **Vite** - Ferramenta de build rápida
- **TypeScript** - JavaScript com tipagem estática
- **React** - Biblioteca para interfaces de usuário
- **shadcn/ui** - Componentes de UI modernos
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones SVG

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes shadcn/ui
│   ├── Header.tsx      # Cabeçalho do site
│   ├── Footer.tsx      # Rodapé com informações de contato
│   ├── CardsIniciais.tsx # Cards da página inicial
│   └── MinisteriosSection.tsx # Seção de ministérios
├── pages/              # Páginas principais
│   ├── Principal.tsx   # Página inicial
│   ├── Ministerios.tsx # Página de ministérios
│   └── ...
├── data/               # Dados estáticos
└── assets/             # Imagens e recursos
```

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é desenvolvido para a Igreja Renovada de Astorga, PR.
