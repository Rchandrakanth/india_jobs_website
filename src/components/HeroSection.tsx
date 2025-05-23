
import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, setSearchQuery }) => {
  const trendingSearches = ['Software Developer', 'Government Jobs', 'Data Analyst', 'Digital Marketing', 'UPSC'];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-1" />
              50,000+ Active Jobs Updated Daily
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Find the Right Job,
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Anywhere in India
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              IT, Government, and Non-IT jobs updated daily — for students, freshers, and professionals across all Indian states and territories.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Job title, skills, or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg border-none shadow-none focus:ring-0 focus:outline-none bg-transparent"
                  />
                </div>
                
                <div className="relative md:w-64">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="w-full pl-12 pr-4 py-4 text-lg border-none bg-transparent focus:ring-0 focus:outline-none appearance-none cursor-pointer">
                    <option value="">All India</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="telangana">Telangana</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                  </select>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Search Jobs
                </Button>
              </div>
            </div>
            
            {/* Trending Searches */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Trending:</span>
              {trendingSearches.map((term, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-white/80 hover:bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 hover:shadow-sm"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
