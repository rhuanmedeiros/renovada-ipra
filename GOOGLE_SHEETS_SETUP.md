# Documentação - Integração com Google Sheets para Sermões

## Visão Geral

Este sistema permite que você mantenha os sermões atualizados automaticamente através de uma planilha do Google Sheets. Quando você adiciona novos vídeos ou PDFs na planilha, eles aparecem automaticamente no site.

## Configuração Inicial

### 1. Criar a Planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Nomeie a aba como **"Sermões"** (exatamente assim)
4. Configure as colunas conforme o modelo abaixo

### 2. Estrutura da Planilha

A planilha deve ter **exatamente** estas colunas na primeira linha (cabeçalho):

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| SerieId | SerieTitle | SerieDescription | SerieBanner | VideoTitle | VideoUrl | VideoDate | PdfTitle | PdfUrl |

### 3. Descrição das Colunas

- **SerieId**: Identificador único da série (ex: esperanca-2024, proposito-de-vida)
- **SerieTitle**: Nome da série (ex: "Esperança em Tempos Difíceis")
- **SerieDescription**: Descrição da série 
- **SerieBanner**: URL completa da imagem do banner da série
- **VideoTitle**: Título do vídeo/sermão
- **VideoUrl**: URL do vídeo (YouTube embed)
- **VideoDate**: Data do sermão (formato: AAAA-MM-DD)
- **PdfTitle**: Título do esboço do sermão
- **PdfUrl**: URL do PDF (Google Drive com permissão pública)

## Exemplo de Dados na Planilha

```
SerieId | SerieTitle | SerieDescription | SerieBanner | VideoTitle | VideoUrl | VideoDate | PdfTitle | PdfUrl
esperanca-2024 | Esperança em Tempos Difíceis | Uma série sobre encontrar esperança nos momentos desafiadores | https://exemplo.com/banner1.jpg | A Fonte da Esperança | https://www.youtube.com/embed/ABC123 | 2024-01-21 | Esboço - A Fonte da Esperança | https://drive.google.com/file/d/xyz/view
esperanca-2024 | Esperança em Tempos Difíceis | Uma série sobre encontrar esperança nos momentos desafiadores | https://exemplo.com/banner1.jpg | Esperança que Não Decepciona | https://www.youtube.com/embed/DEF456 | 2024-01-14 | Esboço - Esperança que Não Decepciona | https://drive.google.com/file/d/abc/view
proposito-2024 | Propósito e Chamado | Descobrindo o chamado único de Deus | https://exemplo.com/banner2.jpg | Descobrindo Seu Propósito | https://www.youtube.com/embed/GHI789 | 2024-01-07 | Esboço - Descobrindo Propósito | https://drive.google.com/file/d/def/view
```

## Configuração da API do Google

### 1. Habilitar a API do Google Sheets

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá para **"APIs e Serviços" > "Biblioteca"**
4. Procure por "Google Sheets API" e habilite

### 2. Criar uma Chave de API

1. Vá para **"APIs e Serviços" > "Credenciais"**
2. Clique em **"Criar Credenciais" > "Chave de API"**
3. Copie a chave gerada
4. Configure as restrições de API (opcional, mas recomendado)

### 3. Tornar a Planilha Pública

1. Abra sua planilha no Google Sheets
2. Clique em **"Compartilhar"**
3. Altere para **"Qualquer pessoa com o link pode visualizar"**
4. Copie o ID da planilha da URL (parte entre `/spreadsheets/d/` e `/edit`)

### 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_GOOGLE_SHEETS_API_KEY=sua_chave_de_api_aqui
VITE_GOOGLE_SHEETS_ID=id_da_sua_planilha_aqui
```

## Funcionamento do Sistema

### Como os Dados São Processados

1. **Agrupamento**: Os dados são agrupados por `SerieId`
2. **Vídeos**: Múltiplos vídeos com o mesmo `SerieId` são agrupados na mesma série
3. **PDFs**: PDFs são associados à série correspondente
4. **Ordenação**: Vídeos são ordenados por data (mais recente primeiro)

### Estrutura no Site

- **Banner da Série**: Exibido no topo usando `SerieBanner`
- **Título e Descrição**: Mostrados sobre o banner
- **Vídeos**: Grid de vídeos à esquerda (3/4 da largura)
- **PDFs**: Lista de esboços à direita (1/4 da largura)

## Dicas Importantes

### URLs de Vídeo do YouTube
- Use o formato embed: `https://www.youtube.com/embed/VIDEO_ID`
- Não use URLs normais do YouTube

### URLs de PDFs do Google Drive
1. Faça upload do PDF para o Google Drive
2. Altere permissão para **"Qualquer pessoa com o link pode visualizar"**
3. Copie o link de compartilhamento
4. Use o formato: `https://drive.google.com/file/d/FILE_ID/view`

### Formatação de Datas
- Use o formato: `AAAA-MM-DD` (ex: 2024-01-21)
- Isso garantirá a ordenação correta

### Imagens de Banner
- Use URLs públicas de imagens
- Recomendado: 1200x400px ou proporção similar
- Formatos suportados: JPG, PNG, WebP

## Exemplo de Planilha Completa

Para facilitar, você pode [fazer uma cópia desta planilha de exemplo](https://docs.google.com/spreadsheets/d/EXEMPLO/copy):

1. Acesse o link acima
2. Faça uma cópia para sua conta Google
3. Substitua os dados de exemplo pelos seus dados reais
4. Configure as permissões conforme instruído

## Solução de Problemas

### Site não carrega dados da planilha
- Verifique se as variáveis de ambiente estão configuradas
- Confirme se a planilha está pública
- Verifique se a aba se chama exatamente "Sermões"

### Vídeos não aparecem
- Confirme se está usando URLs embed do YouTube
- Verifique se o `SerieId` está correto

### PDFs não funcionam
- Confirme se o arquivo tem permissão pública
- Verifique se está usando o formato correto do Google Drive

### Dados desatualizados
- O sistema busca dados a cada carregamento da página
- Se necessário, force um refresh com Ctrl+F5