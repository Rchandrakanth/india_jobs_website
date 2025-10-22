import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, MapPin, Briefcase, Building2, Clock, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  state: string;
  category: 'IT' | 'Government' | 'Non-IT';
  type: string;
  experience: string;
  salary: string;
  posted: string;
  skills: string[];
}

const StateJobs = () => {
  const { state } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stateName = state 
    ? state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'All States';

  const jobs: Job[] = [
    // Karnataka Jobs
    { id: 1, title: 'Frontend Developer', company: 'Tech Innovations', location: 'Bangalore', state: 'Karnataka', category: 'IT', type: 'Frontend', experience: '2-4 years', salary: '₹8-12 LPA', posted: '2 days ago', skills: ['React', 'TypeScript', 'CSS'] },
    { id: 2, title: 'Fullstack Developer', company: 'Cloud Systems', location: 'Bangalore', state: 'Karnataka', category: 'IT', type: 'Fullstack', experience: '3-5 years', salary: '₹12-18 LPA', posted: '1 day ago', skills: ['React', 'Node.js', 'MongoDB'] },
    { id: 3, title: 'SOC Analyst', company: 'CyberSecure India', location: 'Bangalore', state: 'Karnataka', category: 'IT', type: 'SOC', experience: '2-4 years', salary: '₹7-12 LPA', posted: '1 day ago', skills: ['SIEM', 'Threat Detection', 'Security'] },
    
    // Telangana Jobs
    { id: 4, title: 'React Developer', company: 'WebSoft Solutions', location: 'Hyderabad', state: 'Telangana', category: 'IT', type: 'Frontend', experience: '1-3 years', salary: '₹6-10 LPA', posted: '1 day ago', skills: ['React', 'Redux', 'JavaScript'] },
    { id: 5, title: 'Senior Fullstack Developer', company: 'Enterprise Tech', location: 'Hyderabad', state: 'Telangana', category: 'IT', type: 'Fullstack', experience: '5-7 years', salary: '₹15-22 LPA', posted: '2 days ago', skills: ['Python', 'Django', 'React', 'AWS'] },
    { id: 6, title: 'SOC Team Lead', company: 'SecureTech India', location: 'Hyderabad', state: 'Telangana', category: 'IT', type: 'SOC', experience: '5-8 years', salary: '₹16-24 LPA', posted: '4 days ago', skills: ['Leadership', 'SOC Operations', 'Threat Intelligence'] },
    { id: 7, title: 'Civil Engineer', company: 'Telangana PWD', location: 'Hyderabad', state: 'Telangana', category: 'Government', type: 'Engineering', experience: '2-5 years', salary: '₹5-9 LPA', posted: '3 days ago', skills: ['AutoCAD', 'Site Management', 'Structural Design'] },
    
    // Maharashtra Jobs
    { id: 8, title: 'UI Developer', company: 'Digital Corp', location: 'Mumbai', state: 'Maharashtra', category: 'IT', type: 'Frontend', experience: '3-5 years', salary: '₹10-15 LPA', posted: '3 days ago', skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'] },
    { id: 9, title: 'Frontend Engineer', company: 'StartupXYZ', location: 'Pune', state: 'Maharashtra', category: 'IT', type: 'Frontend', experience: '2-3 years', salary: '₹7-11 LPA', posted: '1 day ago', skills: ['React', 'Next.js', 'Tailwind'] },
    { id: 10, title: 'Security Operations Analyst', company: 'SecureNet Solutions', location: 'Mumbai', state: 'Maharashtra', category: 'IT', type: 'SOC', experience: '3-5 years', salary: '₹10-15 LPA', posted: '2 days ago', skills: ['Incident Response', 'Forensics', 'SOC Tools'] },
    { id: 11, title: 'Senior SOC Analyst', company: 'InfoSec Corp', location: 'Pune', state: 'Maharashtra', category: 'IT', type: 'SOC', experience: '4-6 years', salary: '₹12-18 LPA', posted: '3 days ago', skills: ['SIEM', 'Splunk', 'Security Analysis'] },
    { id: 12, title: 'Marketing Manager', company: 'Consumer Brands Ltd', location: 'Mumbai', state: 'Maharashtra', category: 'Non-IT', type: 'Marketing', experience: '4-7 years', salary: '₹10-16 LPA', posted: '2 days ago', skills: ['Digital Marketing', 'Brand Management', 'SEO'] },
    
    // Tamil Nadu Jobs
    { id: 13, title: 'Senior Frontend Developer', company: 'InfoTech Ltd', location: 'Chennai', state: 'Tamil Nadu', category: 'IT', type: 'Frontend', experience: '4-6 years', salary: '₹12-18 LPA', posted: '4 days ago', skills: ['React', 'Angular', 'TypeScript'] },
    { id: 14, title: 'Cybersecurity SOC Engineer', company: 'TechGuard Systems', location: 'Chennai', state: 'Tamil Nadu', category: 'IT', type: 'SOC', experience: '2-5 years', salary: '₹9-14 LPA', posted: '1 day ago', skills: ['Network Security', 'IDS/IPS', 'SIEM'] },
    { id: 15, title: 'Operations Manager', company: 'Logistics Hub', location: 'Chennai', state: 'Tamil Nadu', category: 'Non-IT', type: 'Operations', experience: '3-6 years', salary: '₹7-12 LPA', posted: '3 days ago', skills: ['Supply Chain', 'Process Optimization', 'Team Management'] },
    
    // Delhi Jobs
    { id: 16, title: 'MERN Stack Developer', company: 'TechCorp India', location: 'Delhi', state: 'Delhi', category: 'IT', type: 'Fullstack', experience: '2-4 years', salary: '₹9-14 LPA', posted: '2 days ago', skills: ['MongoDB', 'Express', 'React', 'Node.js'] },
    { id: 17, title: 'Tax Officer', company: 'Income Tax Department', location: 'Delhi', state: 'Delhi', category: 'Government', type: 'Administrative', experience: '1-3 years', salary: '₹6-10 LPA', posted: '5 days ago', skills: ['Tax Laws', 'Accounting', 'Compliance'] },
    
    // Uttar Pradesh Jobs
    { id: 18, title: 'Full Stack Engineer', company: 'DevHub Solutions', location: 'Noida', state: 'Uttar Pradesh', category: 'IT', type: 'Fullstack', experience: '3-6 years', salary: '₹11-16 LPA', posted: '3 days ago', skills: ['Java', 'Spring Boot', 'React'] },
    
    // West Bengal Jobs
    { id: 19, title: 'Fullstack JavaScript Developer', company: 'WebTech Solutions', location: 'Kolkata', state: 'West Bengal', category: 'IT', type: 'Fullstack', experience: '2-4 years', salary: '₹8-13 LPA', posted: '1 day ago', skills: ['Node.js', 'React', 'PostgreSQL'] },
    { id: 20, title: 'HR Manager', company: 'Corporate Services', location: 'Kolkata', state: 'West Bengal', category: 'Non-IT', type: 'Human Resources', experience: '5-8 years', salary: '₹9-15 LPA', posted: '2 days ago', skills: ['Recruitment', 'Employee Relations', 'HR Policies'] },
    
    // Rajasthan Jobs
    { id: 21, title: 'Junior SOC Analyst', company: 'CyberWatch', location: 'Jaipur', state: 'Rajasthan', category: 'IT', type: 'SOC', experience: '0-2 years', salary: '₹4-7 LPA', posted: '2 days ago', skills: ['SIEM', 'Log Analysis', 'Security Monitoring'] },
  ];

  const categories = ['All', 'IT', 'Government', 'Non-IT'];

  const filteredJobs = jobs.filter(job => {
    const matchesState = !state || job.state.toLowerCase().replace(/\s+/g, '-') === state.toLowerCase();
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesState && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Jobs in {stateName}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find IT, Government, and Non-IT jobs available across {stateName}.
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search by job title, company, location, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="transition-all"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredJobs.length}</span> jobs in {stateName}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-500">No jobs found matching your criteria. Try adjusting your filters.</p>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map(job => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                            <p className="text-gray-600 flex items-center gap-2">
                              <Building2 className="h-4 w-4" />
                              {job.company}
                            </p>
                          </div>
                          <div className="flex gap-2 ml-2">
                            <Badge variant="secondary">{job.category}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}, {job.state}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.posted}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex md:flex-col gap-2">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Apply Now
                        </Button>
                        <Button variant="outline">
                          Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StateJobs;
