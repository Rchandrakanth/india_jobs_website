
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = {
    'Job Categories': [
      { name: 'IT Jobs', href: '/it-jobs' },
      { name: 'Government Jobs', href: '/government-jobs' },
      { name: 'Non-IT Jobs', href: '/non-it-jobs' },
      { name: 'Remote Jobs', href: '/remote-jobs' },
      { name: 'Fresher Jobs', href: '/fresher-jobs' }
    ],
    'Popular States': [
      { name: 'Andhra Pradesh', href: '/state-jobs/andhra-pradesh' },
      { name: 'Telangana', href: '/state-jobs/telangana' },
      { name: 'Karnataka', href: '/state-jobs/karnataka' },
      { name: 'Tamil Nadu', href: '/state-jobs/tamil-nadu' },
      { name: 'Maharashtra', href: '/state-jobs/maharashtra' }
    ],
    'Government Exams': [
      { name: 'UPSC Jobs', href: '/government-jobs/upsc' },
      { name: 'SSC Jobs', href: '/government-jobs/ssc' },
      { name: 'Railway Jobs', href: '/government-jobs/railway' },
      { name: 'Banking Jobs', href: '/government-jobs/banking' },
      { name: 'PSC Jobs', href: '/government-jobs/psc' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Career', href: '/career' }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Never Miss a Job Opportunity
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get daily job alerts, government notifications, and career tips delivered to your inbox
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:bg-white/20"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">CareerIndia</span>
                  <div className="text-xs text-gray-400 -mt-1">Find • Apply • Succeed</div>
                </div>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's most comprehensive job platform connecting talent with opportunities across all sectors and states. Your career growth is our mission.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3" />
                  hello@careerindia.com
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3" />
                  +91 80000-12345
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-3" />
                  Hyderabad, India
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 CareerIndia. All rights reserved. | Made with ❤️ for Indian job seekers
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-sm text-gray-400">
                  50,000+ Jobs • 2M+ Users • 28 States
                </div>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
