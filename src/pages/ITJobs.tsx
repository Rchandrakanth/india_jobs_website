
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ITJobs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Jobs in India
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the latest IT job opportunities for freshers and professionals across India. 
              Includes software development, DevOps, networking, and more.
            </p>
          </div>
          
          <div className="text-center text-gray-600">
            <p>IT Jobs page content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITJobs;
