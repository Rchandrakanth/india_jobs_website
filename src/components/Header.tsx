
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'IT Jobs', href: '/it-jobs', badge: 'Hot' },
    { name: 'Government', href: '/government-jobs' },
    { name: 'Non-IT', href: '/non-it-jobs' },
    { name: 'State Jobs', href: '/state-jobs' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CareerIndia
              </span>
              <div className="text-xs text-gray-500 -mt-1">Find • Apply • Succeed</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-1 group"
              >
                <span className="font-medium">{item.name}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-1 bg-red-100 text-red-600 text-xs px-1.5 py-0.5">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              Post Jobs
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/50 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700">
                  Post Jobs
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
