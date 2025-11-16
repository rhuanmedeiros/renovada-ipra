import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações para imagens e vídeos pesados
    rollupOptions: {
      output: {
        // Otimiza tamanho dos assets e organiza por tipo
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
            return `assets/media/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Code splitting para melhor cache
        manualChunks(id) {
          // Separa node_modules em chunks próprios
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
          // Separa assets de mídia
          if (id.includes('assets/Imagens-Fotos')) {
            if (id.includes('/Mobile/')) {
              return 'media-mobile';
            }
            if (id.includes('/Desktop/')) {
              return 'media-desktop';
            }
          }
        },
      },
    },
    // Aumenta o limite de aviso de chunk para arquivos de mídia
    chunkSizeWarningLimit: 2000,
    // Ativa compressão e otimização
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
      },
    },
    // Otimiza assets
    assetsInlineLimit: 4096, // 4kb - inline assets menores que isso
  },
  // Otimização de dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
