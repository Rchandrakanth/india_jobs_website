
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Star, Clock, MapPin } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CategoryCards = () => {
  const stateJobs = [
    {
      state: 'Andhra Pradesh',
      jobs: '4,234',
      growth: '+12%',
      trending: ['Software Developer', 'Government Teacher', 'Civil Engineer'],
      image: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      state: 'Telangana',
      jobs: '6,789',
      growth: '+18%',
      trending: ['Data Scientist', 'TSPC Jobs', 'Digital Marketing'],
      image: 'bg-gradient-to-br from-purple-400 to-pink-500'
    },
    {
      state: 'Karnataka',
      jobs: '12,456',
      growth: '+25%',
      trending: ['DevOps Engineer', 'Product Manager', 'UX Designer'],
      image: 'bg-gradient-to-br from-green-400 to-blue-500'
    },
    {
      state: 'Tamil Nadu',
      jobs: '8,901',
      growth: '+15%',
      trending: ['Full Stack Developer', 'TNPSC Jobs', 'Business Analyst'],
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    }
  ];

  const popularCategories = [
    {
      title: 'Software Development',
      jobs: '8,234',
      companies: '1,200+',
      avgSalary: '₹6-12 LPA',
      tags: ['React', 'Node.js', 'Python', 'Java']
    },
    {
      title: 'Data Science & Analytics',
      jobs: '3,456',
      companies: '800+',
      avgSalary: '₹8-18 LPA',
      tags: ['Python', 'ML', 'SQL', 'Tableau']
    },
    {
      title: 'Digital Marketing',
      jobs: '5,678',
      companies: '1,500+',
      avgSalary: '₹3-8 LPA',
      tags: ['SEO', 'SEM', 'Social Media', 'Analytics']
    },
    {
      title: 'Government Jobs',
      jobs: '2,890',
      companies: '500+',
      avgSalary: '₹3-15 LPA',
      tags: ['UPSC', 'SSC', 'Banking', 'Railways']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* State-wise Jobs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Jobs by State
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover opportunities in your preferred state across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateJobs.map((state, index) => (
              <Link key={index} to={`/state-jobs/${state.state.toLowerCase().replace(' ', '-')}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`h-32 ${state.image} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold">
                        {state.growth}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{state.state}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">{state.jobs}</div>
                      <div className="text-sm text-gray-500">active jobs</div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-sm font-medium text-gray-700">Trending:</div>
                      <div className="flex flex-wrap gap-1">
                        {state.trending.slice(0, 2).map((trend, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      View Jobs
                      <ArrowUp className="ml-2 h-4 w-4 transform rotate-45 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Categories */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore high-demand career paths with competitive salaries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {category.jobs} jobs
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Building className="h-4 w-4 mr-1" />
                      {category.companies} companies
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {category.avgSalary}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {category.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
