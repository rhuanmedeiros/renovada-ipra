import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll para o topo quando a rota muda
    window.scrollTo(0, 0);
  }, [pathname]);
};