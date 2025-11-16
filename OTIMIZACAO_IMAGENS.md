# Guia de Otimização de Imagens e Performance

## 📊 Problemas Identificados

### Vídeos Mobile (src/assets/Imagens-Fotos/Mobile/)
- `video1.mp4`: **21MB** ⚠️
- `video2.mp4`: **6.8MB** ⚠️
- `video3.mp4`: **11MB** ⚠️
- `video4.mp4`: **5.8MB** ⚠️
- `video5.mp4`: **16MB** ⚠️
- **Total: ~60MB** sendo carregados no mobile!

### Imagens Desktop (src/assets/Imagens-Fotos/Desktop/)
- Todas as imagens JPG: **340-396KB** cada
- Sem compressão WebP ou AVIF

## ✅ Otimizações Já Implementadas

### 1. Lazy Loading de Vídeos
- ✅ Primeiro vídeo carrega imediatamente
- ✅ Outros vídeos carregam após 2 segundos
- ✅ Preload otimizado (auto para primeiro, metadata para outros)
- ✅ Placeholder enquanto carrega

### 2. Lazy Loading de Imagens Desktop
- ✅ Primeira imagem carrega imediatamente
- ✅ Outras imagens carregam após 1 segundo
- ✅ Pré-carregamento progressivo

### 3. Configuração Vite Otimizada
- ✅ Code splitting por tipo de mídia
- ✅ Chunks separados para vendor, React, e mídia
- ✅ Compressão Terser ativada
- ✅ Console.log removido em produção
- ✅ Assets organizados por tipo

## 🔧 Próximos Passos Recomendados

### Opção 1: Comprimir Vídeos (RECOMENDADO)

Use **FFmpeg** para reduzir o tamanho dos vídeos em até 70% sem perda perceptível de qualidade:

```bash
# Instalar FFmpeg (se não tiver)
sudo apt install ffmpeg  # Ubuntu/Debian

# Comprimir vídeos (execute no diretório do projeto)
cd src/assets/Imagens-Fotos/Mobile/

# Compactar cada vídeo (ajuste qualidade com -crf: 23-28 é ideal)
ffmpeg -i video1.mp4 -vcodec libx264 -crf 28 -preset slow video1-compressed.mp4
ffmpeg -i video2.mp4 -vcodec libx264 -crf 28 -preset slow video2-compressed.mp4
ffmpeg -i video3.mp4 -vcodec libx264 -crf 28 -preset slow video3-compressed.mp4
ffmpeg -i video4.mp4 -vcodec libx264 -crf 28 -preset slow video4-compressed.mp4
ffmpeg -i video5.mp4 -vcodec libx264 -crf 28 -preset slow video5-compressed.mp4

# Após verificar qualidade, substitua os originais
mv video1-compressed.mp4 video1.mp4
# ... repita para os outros
```

**Meta**: Reduzir de ~60MB para **15-20MB total**

### Opção 2: Converter Imagens para WebP

```bash
cd src/assets/Imagens-Fotos/Desktop/

# Instalar cwebp (se não tiver)
sudo apt install webp

# Converter todas as imagens JPG para WebP
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

**Meta**: Reduzir de ~340KB para **~100KB por imagem** (70% de economia)

### Opção 3: Use Serviço CDN para Hospedar Mídia

Mover vídeos e imagens grandes para:
- **Cloudinary** (grátis até 25GB)
- **ImageKit** (grátis até 20GB)
- **Bunny CDN** (pago, mas muito barato)

Benefícios:
- Compressão automática
- Responsividade adaptativa
- Cache global
- Não conta no bundle da aplicação

## 📈 Ganhos Esperados

### Antes das Otimizações
- Primeiro carregamento mobile: **60MB de vídeos + 2.8MB de imagens**
- Tempo de carregamento 4G: **~20-30 segundos**
- Time to Interactive: **~15-25 segundos**

### Depois das Otimizações (com compressão)
- Primeiro carregamento mobile: **~5MB (primeiro vídeo) + lazy load do resto**
- Tempo de carregamento 4G: **~3-5 segundos**
- Time to Interactive: **~2-3 segundos**

**Melhoria: ~85% mais rápido!**

## 🚀 Deploy Otimizado

Após implementar as otimizações, execute:

```bash
# Limpar build anterior
rm -rf dist/

# Build otimizado
npm run build

# Verificar tamanho dos chunks
du -h dist/assets/* | sort -h

# Deploy
# (seu comando de deploy aqui)
```

## 📱 Testando Performance

### Lighthouse (Chrome DevTools)
```
1. Abra o site em modo anônimo
2. F12 → Lighthouse tab
3. Escolha "Mobile" + "Performance"
4. Run analysis

Meta: Performance Score > 90
```

### Network Throttling
```
1. Chrome DevTools → Network tab
2. Throttling: "Slow 3G" ou "Fast 3G"
3. Recarregue e observe tempo de carregamento

Meta: Time to Interactive < 5s em Fast 3G
```

## ⚙️ Configurações Adicionais

### .htaccess (Apache) ou nginx.conf

Adicione compressão Gzip/Brotli no servidor:

```apache
# .htaccess (Apache)
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript video/mp4
</IfModule>

# Cache de mídia
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

## 🎯 Checklist Final

- [ ] Comprimir vídeos com FFmpeg (target: 15-20MB total)
- [ ] Converter imagens para WebP (target: ~100KB cada)
- [ ] Testar build: `npm run build`
- [ ] Verificar tamanho de chunks gerados
- [ ] Testar Lighthouse score (target: >90)
- [ ] Testar em 3G throttling (target: <5s)
- [ ] Fazer commit e push
- [ ] Deploy em produção
- [ ] Testar em produção com dispositivo real

## 📚 Referências

- [FFmpeg Compression Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [WebP Conversion Guide](https://developers.google.com/speed/webp)
- [Vite Build Optimizations](https://vitejs.dev/guide/build.html)
- [Web.dev Performance Guide](https://web.dev/performance/)
