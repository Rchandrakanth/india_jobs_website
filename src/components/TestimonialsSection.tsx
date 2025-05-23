
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Developer',
      company: 'TCS',
      location: 'Andhra Pradesh',
      rating: 5,
      text: 'Found my dream job through CareerIndia! The platform made it so easy to filter IT jobs by location and experience. Got placed in TCS within 2 weeks of applying.',
      initials: 'PS'
    },
    {
      name: 'Rahul Kumar',
      role: 'Sub Inspector',
      company: 'Bihar Police',
      location: 'Bihar',
      rating: 5,
      text: 'As someone preparing for government jobs, this platform is a goldmine. All PSC notifications, railway jobs, and banking exams in one place. Highly recommend!',
      initials: 'RK'
    },
    {
      name: 'Anita Reddy',
      role: 'Digital Marketing Manager',
      company: 'Flipkart',
      location: 'Hyderabad',
      rating: 5,
      text: 'The non-IT job section is fantastic! Found several marketing opportunities that perfectly matched my skills. The interface is clean and professional.',
      initials: 'AR'
    },
    {
      name: 'Vikram Singh',
      role: 'Data Analyst',
      company: 'Infosys',
      location: 'Bangalore',
      rating: 5,
      text: 'Love how the platform aggregates jobs from multiple sources. Saved me hours of searching across different job portals. The state-wise filter is very helpful.',
      initials: 'VS'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who found their perfect career match through our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12 bg-gradient-to-r from-blue-600 to-indigo-600">
                  <AvatarFallback className="text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 truncate">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 font-medium truncate">
                    {testimonial.company} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join over 2 million job seekers who trust CareerIndia for their career growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Create Free Account
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
