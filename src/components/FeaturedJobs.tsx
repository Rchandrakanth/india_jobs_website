
import React from 'react';
import { Clock, MapPin, Building, ArrowUp, Bookmark } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Mahindra',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-12 LPA',
      postedTime: '2 hours ago',
      skills: ['React', 'TypeScript', 'Node.js'],
      description: 'Looking for an experienced frontend developer to join our growing team...',
      featured: true,
      urgent: false
    },
    {
      id: 2,
      title: 'Sub Inspector',
      company: 'Andhra Pradesh Police',
      location: 'Vijayawada, AP',
      type: 'Government',
      experience: 'Fresher',
      salary: '₹3.5-7 LPA',
      postedTime: '4 hours ago',
      skills: ['Physical Fitness', 'Law Knowledge', 'Communication'],
      description: 'Government job opening for Sub Inspector position in AP Police...',
      featured: true,
      urgent: true
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Flipkart',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹12-20 LPA',
      postedTime: '6 hours ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Join our data science team to drive insights and innovation...',
      featured: true,
      urgent: false
    },
    {
      id: 4,
      title: 'Digital Marketing Manager',
      company: 'Swiggy',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹6-10 LPA',
      postedTime: '8 hours ago',
      skills: ['SEO', 'SEM', 'Social Media'],
      description: 'Lead our digital marketing initiatives across South India...',
      featured: false,
      urgent: false
    },
    {
      id: 5,
      title: 'Railway Ticket Collector',
      company: 'Indian Railways',
      location: 'Multiple Locations',
      type: 'Government',
      experience: 'Fresher',
      salary: '₹2.5-5 LPA',
      postedTime: '12 hours ago',
      skills: ['Customer Service', 'Hindi/English', 'Basic Computer'],
      description: 'Railway recruitment for TC positions across multiple zones...',
      featured: false,
      urgent: true
    },
    {
      id: 6,
      title: 'Product Manager',
      company: 'Microsoft',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹25-40 LPA',
      postedTime: '1 day ago',
      skills: ['Strategy', 'Analytics', 'Leadership'],
      description: 'Drive product strategy for our cloud services platform...',
      featured: true,
      urgent: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Job Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked opportunities from top companies and government organizations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className={`p-6 hover:shadow-xl transition-all duration-300 group relative ${job.featured ? 'ring-2 ring-blue-200 bg-blue-50/30' : ''}`}>
              {/* Job Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {job.featured && (
                      <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                        Featured
                      </Badge>
                    )}
                    {job.urgent && (
                      <Badge variant="destructive" className="text-xs px-2 py-1">
                        Urgent
                      </Badge>
                    )}
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {job.type}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 space-x-4 text-sm">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bookmark className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                </button>
              </div>

              {/* Job Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Experience: {job.experience}</span>
                  <span className="font-semibold text-green-600">{job.salary}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Job Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {job.postedTime}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    View Details
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline" 
            className="px-8 py-3 text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            View All Jobs
            <ArrowUp className="ml-2 h-4 w-4 transform rotate-45" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
