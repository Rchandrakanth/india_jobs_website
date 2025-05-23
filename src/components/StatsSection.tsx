
import React from 'react';
import { TrendingUp, Users, Building, MapPin } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '50,000+',
      label: 'Active Jobs',
      description: 'Updated daily across all sectors'
    },
    {
      icon: Users,
      number: '2M+',
      label: 'Job Seekers',
      description: 'Trust our platform for career growth'
    },
    {
      icon: Building,
      number: '10,000+',
      label: 'Companies',
      description: 'From startups to Fortune 500'
    },
    {
      icon: MapPin,
      number: '28',
      label: 'States Covered',
      description: 'Pan-India job opportunities'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            India's most comprehensive job platform connecting talent with opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 rounded-xl p-3 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold">
                      {stat.label}
                    </div>
                    <div className="text-blue-100 text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
