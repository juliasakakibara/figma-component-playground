interface PlaygroundHeroProps {
  scrollProgress: number;
}

export function PlaygroundHero({ scrollProgress }: PlaygroundHeroProps) {
  // Interpolate values based on scroll progress
  const eased = scrollProgress;
  
  // Title: 180px -> 36px
  const titleSize = 180 - (eased * 144);
  // Description: 24px -> 16px  
  const descSize = 24 - (eased * 8);
  // Gap: 80px -> 16px
  const gapSize = 80 - (eased * 64);
  // Padding: 80px -> 40px
  const paddingY = 80 - (eased * 40);
  
  // Letter spacing: -4.32px -> -0.072px
  const titleTracking = -4.32 + (eased * 4.248);
  // Description tracking: -0.12px -> 0.08px
  const descTracking = -0.12 + (eased * 0.2);
  
  // Line height: 0.95 -> 1.2
  const titleLineHeight = 0.95 + (eased * 0.25);
  
  // Determine positioning - sticky when scrolled
  const isSticky = scrollProgress >= 1;
  
  return (
    <div 
      className={`bg-primary box-border content-stretch flex flex-col items-start not-italic px-[60px] z-40 w-full text-primary-foreground ${isSticky ? 'sticky top-[72px]' : 'relative'}`}
      style={{
        gap: `${gapSize}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        transition: 'all 0.1s ease-out',
      }}
    >
      <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p 
        className="min-w-full relative shrink-0 w-[min-content]"
        style={{
          fontSize: `${titleSize}px`,
          letterSpacing: `${titleTracking}px`,
          lineHeight: titleLineHeight,
          fontWeight: 800,
          transition: 'all 0.1s ease-out',
        }}
      >
        Component Playground
      </p>
      <p 
        className="relative shrink-0 w-full max-w-[908px]"
        style={{
          fontSize: `${descSize}px`,
          letterSpacing: `${descTracking}px`,
          lineHeight: 1.4,
          fontWeight: 300,
          transition: 'all 0.1s ease-out',
        }}
      >
        Building lasting connections with your audience is our mission. We infuse creativity into every touchpoint, whether it's customer experience, relationship management, or commerce.
      </p>
    </div>
  );
}
