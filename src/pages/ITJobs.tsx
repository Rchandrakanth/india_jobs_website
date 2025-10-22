import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, Clock, DollarSign, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  state: string;
  type: 'Frontend' | 'Fullstack' | 'SOC';
  experience: string;
  salary: string;
  posted: string;
  skills: string[];
}

const ITJobs = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const jobs: Job[] = [
    // Frontend Jobs
    { id: 1, title: 'Frontend Developer', company: 'Tech Innovations', location: 'Bangalore', state: 'Karnataka', type: 'Frontend', experience: '2-4 years', salary: '₹8-12 LPA', posted: '2 days ago', skills: ['React', 'TypeScript', 'CSS'] },
    { id: 2, title: 'React Developer', company: 'WebSoft Solutions', location: 'Hyderabad', state: 'Telangana', type: 'Frontend', experience: '1-3 years', salary: '₹6-10 LPA', posted: '1 day ago', skills: ['React', 'Redux', 'JavaScript'] },
    { id: 3, title: 'UI Developer', company: 'Digital Corp', location: 'Mumbai', state: 'Maharashtra', type: 'Frontend', experience: '3-5 years', salary: '₹10-15 LPA', posted: '3 days ago', skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'] },
    { id: 4, title: 'Frontend Engineer', company: 'StartupXYZ', location: 'Pune', state: 'Maharashtra', type: 'Frontend', experience: '2-3 years', salary: '₹7-11 LPA', posted: '1 day ago', skills: ['React', 'Next.js', 'Tailwind'] },
    { id: 5, title: 'Senior Frontend Developer', company: 'InfoTech Ltd', location: 'Chennai', state: 'Tamil Nadu', type: 'Frontend', experience: '4-6 years', salary: '₹12-18 LPA', posted: '4 days ago', skills: ['React', 'Angular', 'TypeScript'] },
    
    // Fullstack Jobs
    { id: 6, title: 'Fullstack Developer', company: 'Cloud Systems', location: 'Bangalore', state: 'Karnataka', type: 'Fullstack', experience: '3-5 years', salary: '₹12-18 LPA', posted: '1 day ago', skills: ['React', 'Node.js', 'MongoDB'] },
    { id: 7, title: 'MERN Stack Developer', company: 'TechCorp India', location: 'Delhi', state: 'Delhi', type: 'Fullstack', experience: '2-4 years', salary: '₹9-14 LPA', posted: '2 days ago', skills: ['MongoDB', 'Express', 'React', 'Node.js'] },
    { id: 8, title: 'Full Stack Engineer', company: 'DevHub Solutions', location: 'Noida', state: 'Uttar Pradesh', type: 'Fullstack', experience: '3-6 years', salary: '₹11-16 LPA', posted: '3 days ago', skills: ['Java', 'Spring Boot', 'React'] },
    { id: 9, title: 'Senior Fullstack Developer', company: 'Enterprise Tech', location: 'Hyderabad', state: 'Telangana', type: 'Fullstack', experience: '5-7 years', salary: '₹15-22 LPA', posted: '2 days ago', skills: ['Python', 'Django', 'React', 'AWS'] },
    { id: 10, title: 'Fullstack JavaScript Developer', company: 'WebTech Solutions', location: 'Kolkata', state: 'West Bengal', type: 'Fullstack', experience: '2-4 years', salary: '₹8-13 LPA', posted: '1 day ago', skills: ['Node.js', 'React', 'PostgreSQL'] },
    
    // SOC Jobs
    { id: 11, title: 'SOC Analyst', company: 'CyberSecure India', location: 'Bangalore', state: 'Karnataka', type: 'SOC', experience: '2-4 years', salary: '₹7-12 LPA', posted: '1 day ago', skills: ['SIEM', 'Threat Detection', 'Security'] },
    { id: 12, title: 'Security Operations Analyst', company: 'SecureNet Solutions', location: 'Mumbai', state: 'Maharashtra', type: 'SOC', experience: '3-5 years', salary: '₹10-15 LPA', posted: '2 days ago', skills: ['Incident Response', 'Forensics', 'SOC Tools'] },
    { id: 13, title: 'Senior SOC Analyst', company: 'InfoSec Corp', location: 'Pune', state: 'Maharashtra', type: 'SOC', experience: '4-6 years', salary: '₹12-18 LPA', posted: '3 days ago', skills: ['SIEM', 'Splunk', 'Security Analysis'] },
    { id: 14, title: 'Cybersecurity SOC Engineer', company: 'TechGuard Systems', location: 'Chennai', state: 'Tamil Nadu', type: 'SOC', experience: '2-5 years', salary: '₹9-14 LPA', posted: '1 day ago', skills: ['Network Security', 'IDS/IPS', 'SIEM'] },
    { id: 15, title: 'SOC Team Lead', company: 'SecureTech India', location: 'Hyderabad', state: 'Telangana', type: 'SOC', experience: '5-8 years', salary: '₹16-24 LPA', posted: '4 days ago', skills: ['Leadership', 'SOC Operations', 'Threat Intelligence'] },
    { id: 16, title: 'Junior SOC Analyst', company: 'CyberWatch', location: 'Jaipur', state: 'Rajasthan', type: 'SOC', experience: '0-2 years', salary: '₹4-7 LPA', posted: '2 days ago', skills: ['SIEM', 'Log Analysis', 'Security Monitoring'] },
  ];

  const states = ['All', ...Array.from(new Set(jobs.map(job => job.state))).sort()];
  const jobTypes = ['All', 'Frontend', 'Fullstack', 'SOC'];

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesState = selectedState === 'All' || job.state === selectedState;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesType && matchesState && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Jobs in India
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the latest IT job opportunities for freshers and professionals across India. 
              Includes Frontend, Fullstack, and SOC positions.
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
                    placeholder="Search by job title, company, or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* Job Type Filter */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Job Type</label>
                    <div className="flex flex-wrap gap-2">
                      {jobTypes.map(type => (
                        <Button
                          key={type}
                          variant={selectedType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedType(type)}
                          className="transition-all"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* State Filter */}
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">State</label>
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredJobs.length}</span> jobs
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
                          <Badge variant="secondary" className="ml-2">
                            {job.type}
                          </Badge>
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

export default ITJobs;
