import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const scrolled = (scrollY + windowHeight) / scrollHeight;
      setScrollPercent(scrolled);
    }

    window.addEventListener('scroll', handleScroll);

    // Ejecutar al montar para tener valor inicial
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPercent;
}