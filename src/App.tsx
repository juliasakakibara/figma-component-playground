import { useState, useEffect } from 'react';
import { PlaygroundNavbar } from './components/PlaygroundNavbar';
import { PlaygroundHero } from './components/PlaygroundHero';
import { InteractivePlayground } from './components/InteractivePlayground';
import { PlaygroundFooter } from './components/PlaygroundFooter';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Complete the animation within 400px of scrolling for smooth parallax
      const scrollDistance = 400;
      const progress = Math.min(scrollY / scrollDistance, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background flex flex-col relative min-h-screen">
      <PlaygroundNavbar />
      <div className="pt-[72px] min-h-screen">
        <PlaygroundHero scrollProgress={scrollProgress} />
      </div>
      <InteractivePlayground />
      <PlaygroundFooter />
    </div>
  );
}
