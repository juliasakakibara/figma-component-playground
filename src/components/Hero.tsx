import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[600px] bg-secondary overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1608112433473-415cab382057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJvJTIwYmFubmVyJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzYwNzI3MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Hero banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-primary-foreground mb-4">
            Discover the Latest Tech
          </h1>
          <p className="text-primary-foreground mb-8 opacity-90">
            Premium electronics and gadgets curated for the modern lifestyle. Shop our exclusive collection today.
          </p>
          <Button size="lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
