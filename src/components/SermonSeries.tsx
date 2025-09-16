import { Card, CardContent } from "@/components/ui/card";
import { SermonSeries as SermonSeriesType } from "@/data/sermons";
import bannerEsperanca from "@/assets/banner-esperanca.jpg";
import bannerProposito from "@/assets/banner-proposito.jpg";

interface SermonSeriesProps {
  series: SermonSeriesType;
}

const SermonSeries = ({ series }: SermonSeriesProps) => {
  // Map banners to imported images
  const bannerMap: Record<string, string> = {
    '/src/assets/banner-esperanca.jpg': bannerEsperanca,
    '/src/assets/banner-proposito.jpg': bannerProposito,
  };

  const bannerSrc = bannerMap[series.banner] || series.banner;
  return (
    <div className="mb-16">
      {/* Series Banner */}
      <div className="relative mb-8 overflow-hidden rounded-2xl shadow-church">
        <img 
          src={bannerSrc} 
          alt={series.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">{series.title}</h2>
            {series.description && (
              <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
                {series.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {series.videos.map((video, index) => (
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
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                {video.date && (
                  <p className="text-muted-foreground text-sm">{video.date}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SermonSeries;