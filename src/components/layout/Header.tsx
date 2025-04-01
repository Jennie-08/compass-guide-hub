
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { text: 'Dashboard', path: '/' },
  { text: 'Tutorials', path: '/category/tutorials' },
  { text: 'Guides', path: '/category/guides' },
  { text: 'FAQs', path: '/category/faqs' },
  { text: 'Videos', path: '/videos' },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="py-4 bg-ncompass-blue shadow-md">
      <div className="kb-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-ncompass-green rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#091635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                <path d="m8 12 3 3 5-5" />
              </svg>
            </div>
            <div>
              <Link to="/" className="text-white font-bold text-xl">Knowledge Base</Link>
              <p className="text-xs text-gray-300">A Space To Search And Browse For Answers And Documentation</p>
            </div>
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-gray-300 hover:text-ncompass-green transition-colors duration-200"
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          )}

          {/* N-Compass Logo */}
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/e5099738-68ea-4272-8036-fafcbf9bc040.png" 
              alt="N-Compass TV Logo" 
              className="h-8" 
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <div className="mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-gray-300 hover:text-ncompass-green py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
