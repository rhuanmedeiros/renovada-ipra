# Componente WhatsApp Float

## Descrição
Componente de botão flutuante para contato via WhatsApp, posicionado no canto inferior direito de todas as páginas.

## Funcionalidades
- 📱 **Número de contato**: +55 44 99861-9596
- 💬 **Mensagem padrão**: "Olá! Gostaria de conhecer mais sobre a Igreja Renovada."
- 🎯 **Posição**: Fixo no canto inferior direito
- 📱 **Responsivo**: Adapta-se a diferentes tamanhos de tela
- ✨ **Animações**: 
  - Pulso animado para chamar atenção
  - Hover com escala e sombra
  - Tooltip explicativo
- 🎨 **Cores**: Verde WhatsApp (#22c55e)

## Páginas onde está implementado
- ✅ Página Principal (`Principal.tsx`)
- ✅ Página de Doações (`Doacoes.tsx`)
- ✅ Página de Ministérios (`Ministerios.tsx`)
- ✅ Página de Sermões (`Sermoes.tsx`)
- ✅ Página 404 (`NotFound.tsx`)

## Comportamento
- Ao clicar, abre o WhatsApp Web ou app do WhatsApp
- URL gerada: `https://wa.me/5544998619596?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Igreja%20Renovada.`
- Acessível com texto alternativo para screen readers

## Localização do código
- **Componente**: `src/components/ui/whatsapp-float.tsx`
- **Ícone**: SVG do WhatsApp embutido no componente