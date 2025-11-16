import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SermonSeries as SermonSeriesType, SermonVideo } from "@/data/sermons";
import { ChevronDown, ChevronUp, Play } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/ui/video-modal";

interface SermonSeriesProps {
  series: SermonSeriesType;
}

const SermonSeries = ({ series }: SermonSeriesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<SermonVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const openVideoModal = (video: SermonVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Função para extrair o ID do vídeo do YouTube da URL
  const getYouTubeVideoId = (url: string): string | null => {
    try {
      // Tenta diferentes padrões de URL do YouTube
      const cleaned = url?.trim();
      let videoId: string | null = null;

      // Padrão 1: URL embed (/embed/VIDEO_ID)
      if (cleaned?.includes('/embed/')) {
        videoId = cleaned.split('/embed/')[1]?.split('?')[0]?.split('&')[0];
      }
      // Padrão 2: URL watch (?v=VIDEO_ID)
      else if (cleaned?.includes('watch?v=')) {
        videoId = cleaned.split('watch?v=')[1]?.split('&')[0];
      }
      // Padrão 3: URL curta (youtu.be/VIDEO_ID)
      else if (cleaned?.includes('youtu.be/')) {
        videoId = cleaned.split('youtu.be/')[1]?.split('?')[0];
      }
      // Padrão 4: Regex genérico como fallback
      else {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;
        const match = cleaned?.match(regExp);
        videoId = (match && match[7]?.length === 11) ? match[7] : null;
      }
      
      // Validar que o ID tem 11 caracteres (padrão do YouTube)
      return (videoId && videoId.length === 11) ? videoId : null;
    } catch (error) {
      console.error('Erro ao extrair ID do vídeo:', error);
      return null;
    }
  };

  // Função para obter a thumbnail de alta qualidade com fallback
  const getYouTubeThumbnail = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      // Retorna hqdefault primeiro (mais comum). onError irá fazer fallbacks se necessário
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    // Retorna placeholder se não conseguir extrair o ID
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="480"%3E%3Crect width="640" height="480" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2394a3b8"%3EThumbnail indisponível%3C/text%3E%3C/svg%3E';
  };

  return (
    <div className="mb-16 xl:mb-20 2xl:mb-24" id={series.id}>
      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 xl:mb-12 2xl:mb-16"></div>
      
      {/* Series Banner - Clickable */}
      <div 
        className="relative mb-3 xl:mb-4 overflow-hidden rounded-lg md:rounded-2xl xl:rounded-3xl 2xl:rounded-[2rem] shadow-church cursor-pointer hover:shadow-church-lg xl:hover:shadow-2xl transition-all duration-300 group"
        onClick={toggleExpanded}
      >
        <img 
          src={series.banner} 
          alt={series.title}
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with expand indicator */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300">
          <div className="absolute bottom-4 xl:bottom-6 2xl:bottom-8 right-4 xl:right-6 2xl:right-8 bg-white/20 backdrop-blur-sm rounded-full p-3 xl:p-4 2xl:p-5 border border-white/30">
            {isExpanded ? (
              <ChevronUp className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 text-white" />
            ) : (
              <ChevronDown className="h-6 w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Videos count info - Below banner */}
      <div className="mb-8 xl:mb-12 2xl:mb-16">
        <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground">
          {series.videos.length} vídeo{series.videos.length !== 1 ? 's' : ''} • Clique no banner para {isExpanded ? 'ocultar' : 'ver todos'}
        </p>
      </div>

      {/* Videos Grid - Expandable */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 xl:gap-8 2xl:gap-10 animate-in slide-in-from-top-4 duration-500">
          {series.videos.length > 0 ? (
            series.videos.map((video, index) => (
              <Card key={index} className="overflow-hidden rounded-lg md:rounded-2xl xl:rounded-3xl shadow-church hover:shadow-church-lg xl:hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] xl:hover:scale-[1.03]">
                <CardContent className="p-0">
                  <div 
                    className="aspect-video relative group bg-slate-100 dark:bg-slate-800"
                    onClick={() => openVideoModal(video)}
                  >
                    {/* Thumbnail do vídeo em alta qualidade */}
                    <img
                      src={getYouTubeThumbnail(video.url)}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Sequência de fallback para thumbnails: sddefault -> hqdefault -> mqdefault -> placeholder
                        const videoId = getYouTubeVideoId(video.url);
                        const cur = e.currentTarget;
                        try {
                          if (videoId) {
                            if (cur.src.includes('sddefault')) {
                              cur.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              return;
                            }
                            if (cur.src.includes('hqdefault')) {
                              cur.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                              return;
                            }
                            if (cur.src.includes('mqdefault')) {
                              // última tentativa antes do placeholder
                              cur.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
                              return;
                            }
                          }
                        } catch (err) {
                          console.error('Erro no fallback de thumbnail:', err);
                        }

                        // Se tudo falhar, usar placeholder inline
                        // Log para identificar vídeos problemáticos
                        console.warn('[Thumbnail] não foi possível carregar thumbnail para', video.url, '– exibindo placeholder');
                        cur.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect width="100%25" height="100%25" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%2394a3b8"%3EThumbnail indispon%C3%ADvel%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    
                    {/* Overlay com botão de play */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 xl:p-5 2xl:p-6 border border-white/30">
                        <Play className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-4 xl:p-5 2xl:p-6">
                    <h3 className="font-semibold text-base md:text-lg xl:text-xl 2xl:text-2xl mb-1 xl:mb-2 overflow-hidden leading-tight"
                        style={
                          // Linha truncada com -webkit-box para suportar multiline clamp
                          // Tipamos explicitamente para evitar uso de `any` que ativa o lint
                          {
                            display: "-webkit-box",
                            WebkitLineClamp: 2 as unknown as number,
                            WebkitBoxOrient: "vertical" as unknown as string,
                          } as React.CSSProperties
                        }>
                      {video.title}
                    </h3>
                    {video.date && (
                      <p className="text-muted-foreground text-xs md:text-sm xl:text-base 2xl:text-lg">{video.date}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 xl:py-20 2xl:py-24 text-center">
              <div className="bg-muted/30 rounded-full p-4 xl:p-6 2xl:p-8 mb-4 xl:mb-6 2xl:mb-8">
                <svg className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold mb-2 xl:mb-3 2xl:mb-4">Vídeos em breve</h3>
              <p className="text-muted-foreground xl:text-lg 2xl:text-xl max-w-md xl:max-w-lg 2xl:max-w-xl">
                Os vídeos desta série serão adicionados em breve. Fique atento às atualizações!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Modal de Vídeo */}
      <VideoModal 
        isOpen={isModalOpen}
        onClose={closeVideoModal}
        video={selectedVideo}
      />
    </div>
  );
};

export default SermonSeries;