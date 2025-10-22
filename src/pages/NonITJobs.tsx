import React, { useState } from 'react';
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
  type: 'Marketing' | 'HR' | 'Operations' | 'Sales' | 'Finance' | 'Logistics';
  experience: string;
  salary: string;
  posted: string;
  skills: string[];
}

const NonITJobs = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const jobs: Job[] = [
    // Marketing Jobs
    { id: 1, title: 'Marketing Manager', company: 'Consumer Brands Ltd', location: 'Mumbai', state: 'Maharashtra', type: 'Marketing', experience: '4-7 years', salary: '₹10-16 LPA', posted: '2 days ago', skills: ['Digital Marketing', 'Brand Management', 'SEO'] },
    { id: 2, title: 'Digital Marketing Specialist', company: 'AdTech Solutions', location: 'Bangalore', state: 'Karnataka', type: 'Marketing', experience: '2-4 years', salary: '₹6-10 LPA', posted: '1 day ago', skills: ['Social Media', 'Google Ads', 'Content Marketing'] },
    { id: 3, title: 'Content Marketing Lead', company: 'Media House', location: 'Delhi', state: 'Delhi', type: 'Marketing', experience: '3-5 years', salary: '₹8-13 LPA', posted: '3 days ago', skills: ['Content Strategy', 'SEO', 'Analytics'] },
    { id: 4, title: 'Marketing Executive', company: 'Retail Corp', location: 'Pune', state: 'Maharashtra', type: 'Marketing', experience: '1-3 years', salary: '₹4-7 LPA', posted: '2 days ago', skills: ['Marketing Strategy', 'Campaign Management', 'Communication'] },
    
    // HR Jobs
    { id: 5, title: 'HR Manager', company: 'Corporate Services', location: 'Kolkata', state: 'West Bengal', type: 'HR', experience: '5-8 years', salary: '₹9-15 LPA', posted: '2 days ago', skills: ['Recruitment', 'Employee Relations', 'HR Policies'] },
    { id: 6, title: 'Talent Acquisition Specialist', company: 'TechHire Solutions', location: 'Hyderabad', state: 'Telangana', type: 'HR', experience: '2-4 years', salary: '₹5-9 LPA', posted: '1 day ago', skills: ['Recruitment', 'Interviewing', 'ATS Systems'] },
    { id: 7, title: 'HR Business Partner', company: 'Enterprise Group', location: 'Bangalore', state: 'Karnataka', type: 'HR', experience: '4-7 years', salary: '₹10-16 LPA', posted: '3 days ago', skills: ['Strategic HR', 'Change Management', 'Leadership'] },
    { id: 8, title: 'Recruitment Coordinator', company: 'Staffing Agency', location: 'Chennai', state: 'Tamil Nadu', type: 'HR', experience: '1-2 years', salary: '₹3-6 LPA', posted: '1 day ago', skills: ['Sourcing', 'Coordination', 'Communication'] },
    
    // Operations Jobs
    { id: 9, title: 'Operations Manager', company: 'Logistics Hub', location: 'Chennai', state: 'Tamil Nadu', type: 'Operations', experience: '3-6 years', salary: '₹7-12 LPA', posted: '3 days ago', skills: ['Supply Chain', 'Process Optimization', 'Team Management'] },
    { id: 10, title: 'Operations Executive', company: 'E-commerce Solutions', location: 'Mumbai', state: 'Maharashtra', type: 'Operations', experience: '2-4 years', salary: '₹5-8 LPA', posted: '2 days ago', skills: ['Operations Management', 'Quality Control', 'Logistics'] },
    { id: 11, title: 'Process Improvement Manager', company: 'Manufacturing Corp', location: 'Pune', state: 'Maharashtra', type: 'Operations', experience: '5-8 years', salary: '₹10-16 LPA', posted: '4 days ago', skills: ['Lean Six Sigma', 'Process Design', 'Analytics'] },
    { id: 12, title: 'Operations Analyst', company: 'Business Services', location: 'Bangalore', state: 'Karnataka', type: 'Operations', experience: '1-3 years', salary: '₹4-7 LPA', posted: '1 day ago', skills: ['Data Analysis', 'Reporting', 'Excel'] },
    
    // Sales Jobs
    { id: 13, title: 'Sales Manager', company: 'Tech Solutions Ltd', location: 'Delhi', state: 'Delhi', type: 'Sales', experience: '4-7 years', salary: '₹8-15 LPA', posted: '2 days ago', skills: ['B2B Sales', 'Team Leadership', 'CRM'] },
    { id: 14, title: 'Business Development Executive', company: 'StartupHub', location: 'Hyderabad', state: 'Telangana', type: 'Sales', experience: '2-4 years', salary: '₹5-10 LPA', posted: '1 day ago', skills: ['Lead Generation', 'Negotiation', 'Client Relations'] },
    { id: 15, title: 'Sales Executive', company: 'Retail Chain', location: 'Jaipur', state: 'Rajasthan', type: 'Sales', experience: '1-3 years', salary: '₹3-6 LPA', posted: '3 days ago', skills: ['Sales Strategy', 'Customer Service', 'Product Knowledge'] },
    { id: 16, title: 'Account Manager', company: 'Corporate Solutions', location: 'Bangalore', state: 'Karnataka', type: 'Sales', experience: '3-5 years', salary: '₹7-12 LPA', posted: '2 days ago', skills: ['Account Management', 'Relationship Building', 'Sales'] },
    
    // Finance Jobs
    { id: 17, title: 'Financial Analyst', company: 'Investment Firm', location: 'Mumbai', state: 'Maharashtra', type: 'Finance', experience: '2-5 years', salary: '₹6-12 LPA', posted: '1 day ago', skills: ['Financial Modeling', 'Excel', 'Analysis'] },
    { id: 18, title: 'Accounts Manager', company: 'Manufacturing Ltd', location: 'Chennai', state: 'Tamil Nadu', type: 'Finance', experience: '4-7 years', salary: '₹8-14 LPA', posted: '2 days ago', skills: ['Accounting', 'Tally', 'GST', 'Taxation'] },
    { id: 19, title: 'Finance Executive', company: 'Corporate Group', location: 'Pune', state: 'Maharashtra', type: 'Finance', experience: '1-3 years', salary: '₹4-7 LPA', posted: '3 days ago', skills: ['Financial Reporting', 'Accounting', 'Compliance'] },
    
    // Logistics Jobs
    { id: 20, title: 'Logistics Manager', company: 'Supply Chain Solutions', location: 'Delhi', state: 'Delhi', type: 'Logistics', experience: '4-7 years', salary: '₹7-13 LPA', posted: '2 days ago', skills: ['Supply Chain', 'Inventory Management', 'Transportation'] },
    { id: 21, title: 'Warehouse Supervisor', company: 'Distribution Center', location: 'Kolkata', state: 'West Bengal', type: 'Logistics', experience: '2-5 years', salary: '₹4-8 LPA', posted: '1 day ago', skills: ['Warehouse Operations', 'Inventory', 'Team Management'] },
    { id: 22, title: 'Supply Chain Analyst', company: 'Logistics Corp', location: 'Bangalore', state: 'Karnataka', type: 'Logistics', experience: '2-4 years', salary: '₹5-9 LPA', posted: '3 days ago', skills: ['Analytics', 'Supply Chain', 'Forecasting'] },
  ];

  const states = ['All', ...Array.from(new Set(jobs.map(job => job.state))).sort()];
  const jobTypes = ['All', 'Marketing', 'HR', 'Operations', 'Sales', 'Finance', 'Logistics'];

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
              Non-IT Jobs in India
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore non-IT career paths in Marketing, HR, Operations, Sales, Finance, and Logistics.
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

export default NonITJobs;
