
import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building, FileText, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickFilters from '@/components/QuickFilters';
import FeaturedJobs from '@/components/FeaturedJobs';
import CategoryCards from '@/components/CategoryCards';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        {/* Quick Filters */}
        <QuickFilters />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Category Cards */}
        <CategoryCards />
        
        {/* Featured Jobs */}
        <FeaturedJobs />
        
        {/* Testimonials */}
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
