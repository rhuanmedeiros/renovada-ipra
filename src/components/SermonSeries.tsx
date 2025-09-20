import { Card, CardContent } from "@/components/ui/card";
import { SermonSeries as SermonSeriesType } from "@/data/sermons";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SermonSeriesProps {
  series: SermonSeriesType;
}

const SermonSeries = ({ series }: SermonSeriesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-16">
      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
      
      {/* Series Banner - Clickable */}
      <div 
        className="relative mb-8 overflow-hidden rounded-2xl shadow-church cursor-pointer hover:shadow-church-lg transition-all duration-300 group"
        onClick={toggleExpanded}
      >
        <img 
          src={series.banner} 
          alt={series.title}
          className="w-full h-32 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay with expand indicator */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300">
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
            {isExpanded ? (
              <ChevronUp className="h-6 w-6 text-white" />
            ) : (
              <ChevronDown className="h-6 w-6 text-white" />
            )}
          </div>
          
          {/* Videos count info */}
          <div className="absolute bottom-4 left-4">
            <p className="text-sm text-white/90 drop-shadow-lg">
              {series.videos.length} vídeo{series.videos.length !== 1 ? 's' : ''} • Clique para {isExpanded ? 'ocultar' : 'ver todos'}
            </p>
          </div>
        </div>
      </div>

      {/* Videos Grid - Expandable */}
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-top-4 duration-500">
          {series.videos.length > 0 ? (
            series.videos.map((video, index) => (
              <Card key={index} className="overflow-hidden rounded-2xl shadow-church hover:shadow-church-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-base md:text-lg mb-1 overflow-hidden"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical' as any
                        }}>
                      {video.title}
                    </h3>
                    {video.date && (
                      <p className="text-muted-foreground text-xs md:text-sm">{video.date}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-muted/30 rounded-full p-4 mb-4">
                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Vídeos em breve</h3>
              <p className="text-muted-foreground max-w-md">
                Os vídeos desta série serão adicionados em breve. Fique atento às atualizações!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SermonSeries;