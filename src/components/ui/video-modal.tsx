import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { SermonVideo } from "@/data/sermons";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: SermonVideo | null;
}

const VideoModal = ({ isOpen, onClose, video }: VideoModalProps) => {
  if (!video) return null;

  const getYouTubeWatchUrl = (embedUrl: string) => {
    // Converter URL embed para URL watch do YouTube
    const videoId = embedUrl.split('/embed/')[1]?.split('?')[0];
    return `https://www.youtube.com/watch?v=${videoId}&hd=1`;
  };

  const getHighQualityEmbedUrl = (embedUrl: string) => {
    // Adicionar parâmetros para forçar alta qualidade
    const baseUrl = embedUrl.split('?')[0];
    return `${baseUrl}?autoplay=1&rel=0&modestbranding=1&vq=hd1080&hd=1&quality=hd1080&cc_load_policy=0&iv_load_policy=3&showinfo=0`;
  };

  const youtubeUrl = getYouTubeWatchUrl(video.url);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black border-none">
        {/* Header com botões */}
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open(youtubeUrl, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Abrir no YouTube
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Vídeo em tela cheia */}
        <div className="w-full h-full">
          <iframe
            src={getHighQualityEmbedUrl(video.url)}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Informações do vídeo na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold mb-2 text-left">
              {video.title}
            </DialogTitle>
            {video.date && (
              <DialogDescription className="text-white/80 text-left">
                {video.date}
              </DialogDescription>
            )}
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;