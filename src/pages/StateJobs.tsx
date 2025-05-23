
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StateJobs = () => {
  const { state } = useParams();

  const stateName = state 
    ? state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'All States';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Jobs in {stateName}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find IT, Government, and Non-IT jobs available across {stateName} districts.
            </p>
          </div>
          
          <div className="text-center text-gray-600">
            <p>State Jobs page content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StateJobs;
