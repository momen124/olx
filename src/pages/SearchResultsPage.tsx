import React, { useState } from 'react';
import SearchFilters from '../components/search/SearchFilters';
import Pagination from '../components/Pagination';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchResults from '../components/search/SearchResults';

type Filters = {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  location: string;
  datePosted: string;
};

const SearchResultsPage: React.FC = () => {
  // Initialize filters state with default values
  const [filters, setFilters] = useState<Filters>({
    category: '',
    minPrice: null,
    maxPrice: null,
    location: '',
    datePosted: ''
  });

  // Handler for when filters change
  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Results</h1>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-6">
            <SearchFilters onFilterChange={handleFilterChange} />
          </div>
          {/* Search Results */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <SearchResults filters={filters} />
              <Pagination />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SearchResultsPage;
