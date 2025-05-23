
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, MapPin, Calendar, ArrowUp } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QuickFilters = () => {
  const categories = [
    {
      icon: Briefcase,
      title: 'IT Jobs',
      subtitle: 'Software, DevOps, Data',
      count: '15,234',
      href: '/it-jobs',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Building,
      title: 'Government',
      subtitle: 'UPSC, SSC, Railways',
      count: '8,567',
      href: '/government-jobs',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: MapPin,
      title: 'Non-IT',
      subtitle: 'Sales, Marketing, HR',
      count: '12,890',
      href: '/non-it-jobs',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const quickFilters = [
    { label: "Today's Jobs", count: '2,340', active: true },
    { label: 'This Week', count: '12,567' },
    { label: 'Remote Jobs', count: '4,234' },
    { label: 'Fresher Jobs', count: '8,901' },
    { label: 'Trending', count: '1,456' }
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Jobs by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore opportunities across different sectors and industries
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} to={category.href} className="group">
                <Card className={`p-8 bg-gradient-to-br ${category.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-white/80 text-gray-700 font-semibold">
                      {category.count} jobs
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Explore Jobs
                    <ArrowUp className="ml-2 h-4 w-4 transform rotate-45 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Quick Filters
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filter.active
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{filter.label}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    filter.active 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white text-gray-600'
                  }`}
                >
                  {filter.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFilters;
