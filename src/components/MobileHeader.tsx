import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import iconRenovada from "@/assets/Icon.svg";

// Itens do menu unificados
const menuItems = [
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/cultos", label: "Cultos" },
  { to: "/ministerios", label: "Ministérios" },
  { to: "/sermoes", label: "Sermões" },
  { to: "/contato", label: "Contato" }
];

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // --- contraste heurística (aplica apenas no header mobile) ---
  const parseRgb = (rgbStr: string | null) => {
    if (!rgbStr) return null;
    const m = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    return [Number(m[1]), Number(m[2]), Number(m[3])];
  };

  const luminance = (r: number, g: number, b: number) => {
    const srgb = [r, g, b].map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  };

  const sampleImageLuminanceAtPoint = async (imgEl: HTMLImageElement, pointX: number, pointY: number) => {
    try {
      if (!imgEl.naturalWidth || !imgEl.naturalHeight) return null;
      const imgRect = imgEl.getBoundingClientRect();
      const relX = pointX - imgRect.left;
      const relY = pointY - imgRect.top;
      if (relX < 0 || relY < 0 || relX > imgRect.width || relY > imgRect.height) return null;

      const sx = Math.round((relX / imgRect.width) * imgEl.naturalWidth);
      const sy = Math.round((relY / imgRect.height) * imgEl.naturalHeight);

      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.drawImage(imgEl, sx, sy, 1, 1, 0, 0, 1, 1);
      const data = ctx.getImageData(0, 0, 1, 1).data;
      return luminance(data[0], data[1], data[2]);
    } catch (e) {
      return null;
    }
  };

  const sampleVideoLuminanceAtPoint = async (videoEl: HTMLVideoElement, pointX: number, pointY: number) => {
    try {
      // readyState < 2 means not enough data to render the current frame
      if (!videoEl.videoWidth || !videoEl.videoHeight || videoEl.readyState < 2) return null;
      const videoRect = videoEl.getBoundingClientRect();
      const relX = pointX - videoRect.left;
      const relY = pointY - videoRect.top;
      if (relX < 0 || relY < 0 || relX > videoRect.width || relY > videoRect.height) return null;

      const sx = Math.round((relX / videoRect.width) * videoEl.videoWidth);
      const sy = Math.round((relY / videoRect.height) * videoEl.videoHeight);

      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      // Important for performance and for reading data back from canvas
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return null;

      ctx.drawImage(videoEl, sx, sy, 1, 1, 0, 0, 1, 1);
      const data = ctx.getImageData(0, 0, 1, 1).data;
      return luminance(data[0], data[1], data[2]);
    } catch (e) {
      // This can happen due to CORS if the video is from another domain.
      // In that case, we can't sample the color. A safe fallback is to assume
      // the video is dark, which results in white text.
      return 0.2;
    }
  };

  const evaluateContrast = async () => {
    const hdr = headerRef.current;
    if (!hdr) return;
    const rect = hdr.getBoundingClientRect();
    // Sample point is horizontally centered and just below the header
    const pointX = Math.round(rect.left + rect.width / 2);
    const pointY = Math.round(rect.bottom + 5); // 5px below header bottom

    let lum: number | null = null;
    let elements: Element[] = [];

    try {
      // Get all elements stacked at the sample point
      elements = document.elementsFromPoint ? document.elementsFromPoint(pointX, pointY) : [];
      if (elements.length === 0 && document.elementFromPoint) {
          const elAtPoint = document.elementFromPoint(pointX, pointY);
          if (elAtPoint) elements = [elAtPoint];
      }
    } catch (e) {
      // Fallback for older browsers or edge cases
      const elAtPoint = document.elementFromPoint(pointX, pointY);
      if (elAtPoint) elements = [elAtPoint];
    }
    
    if (elements.length === 0) return;

    // Iterate through the stack of elements from top to bottom
    for (const el of elements) {
      const element = el as HTMLElement;
      if (!element || typeof element.tagName !== 'string') continue;

      const style = getComputedStyle(element);

      // 1. If element is a VIDEO, sample its luminance
      if (element.tagName === 'VIDEO') {
        lum = await sampleVideoLuminanceAtPoint(element as HTMLVideoElement, pointX, pointY);
        if (lum !== null) break; // Luminance found, stop searching deeper
      }

      // 2. If element is an IMG, sample its luminance
      if (element.tagName === 'IMG') {
        lum = await sampleImageLuminanceAtPoint(element as HTMLImageElement, pointX, pointY);
        if (lum !== null) break;
      }

      // 3. Check for CSS background-image
      if (style.backgroundImage && style.backgroundImage !== "none") {
        // We can't sample a CSS background image directly.
        // If there's an `<img>` inside, we can use it as a proxy.
        const imgInEl = element.querySelector('img');
        if (imgInEl) {
          lum = await sampleImageLuminanceAtPoint(imgInEl, pointX, pointY);
        } else {
          // No image to sample, so we have to make an assumption.
          // Assume neutral luminance. This will result in dark text.
          lum = 0.5;
        }
        if (lum !== null) break;
      }

      // 4. Check for solid background-color
      const isTransparent = style.backgroundColor === "transparent" || style.backgroundColor === "rgba(0, 0, 0, 0)";
      if (!isTransparent) {
        const rgb = parseRgb(style.backgroundColor);
        if (rgb) {
          lum = luminance(rgb[0], rgb[1], rgb[2]);
          if (lum !== null) break;
        }
      }
    }

    // 5. If no luminance was found after checking all elements, fallback to body
    if (lum === null) {
      const bodyStyle = getComputedStyle(document.body);
      const bodyRgb = parseRgb(bodyStyle.backgroundColor);
      if (bodyRgb) {
        lum = luminance(bodyRgb[0], bodyRgb[1], bodyRgb[2]);
      } else {
        // Absolute fallback: assume neutral background
        lum = 0.5;
      }
    }

    // Set state based on luminance. If luminance is high (>0.6), background is light.
    setIsLightBg(Boolean(lum !== null && lum > 0.6));
  };

  useEffect(() => {
    evaluateContrast();
    const onScroll = () => evaluateContrast();
    const onResize = () => evaluateContrast();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textClass = isLightBg ? "text-gray-900" : "text-white";
  const iconClass = textClass;
  const menuItemHover = isLightBg ? "hover:text-gray-700 hover:bg-black/5" : "hover:text-white/80 hover:bg-white/10";

  return (
  <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[9999] md:hidden p-3 sm:p-4 pointer-events-none">
      {/* Header Flutuante com Glassmorphism */}
      <div className="mx-auto max-w-md rounded-2xl bg-black/10 backdrop-blur-md border border-white/20 shadow-xl pointer-events-auto">
        <div className="px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2" onClick={closeMenu}>
            <img
              src={iconRenovada}
              alt="Logo Renovada"
              className="w-8 sm:w-10 h-6 sm:h-8 object-contain"
            />
            <span className={`text-base sm:text-sm font-bold truncate ${textClass}`}>
              IGREJA RENOVADA
            </span>
          </Link>

          {/* Menu Toggle */}
          <div className="flex items-center flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 hover:bg-white/20 dark:hover:bg-white/10 focus:bg-transparent active:bg-transparent p-1.5 sm:p-2 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className={`w-4 sm:w-5 h-4 sm:h-5 ${iconClass}`} />
              ) : (
                <Menu className={`w-4 sm:w-5 h-4 sm:h-5 ${iconClass}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Expandido com animação suave */}
        <nav className="border-t border-white/10 dark:border-white/5" aria-hidden={!isMenuOpen}>
          <div
            id="mobile-menu"
            className={`origin-top transform-gpu transition-all duration-300 ease-out overflow-hidden ${isMenuOpen ? 'scale-y-100 opacity-100 max-h-[600px]' : 'scale-y-0 opacity-0 max-h-0'}`}
            style={{ transformOrigin: 'top' }}
          >
            <div className="px-4 py-4 space-y-3">
              {/* Navigation items */}
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={`block ${textClass} ${menuItemHover} transition-colors text-sm font-medium py-2 px-2 rounded`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* CTA: Contribua (mobile-only) */}
              <div className="pt-3">
                <Link to="/doacoes" onClick={closeMenu} className="block">
                  <Button
                    className="w-full bg-[#009bde] hover:bg-[#008ac6] text-white rounded-lg md:rounded-2xl transition-all duration-200 py-3"
                  >
                    Contribua
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
