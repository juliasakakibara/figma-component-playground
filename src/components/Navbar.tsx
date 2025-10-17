import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h3 className="text-foreground">STOREFRONT</h3>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Shop
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Collections
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
