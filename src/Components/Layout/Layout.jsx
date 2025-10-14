import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from '../../Components/Common/FloatingButtons';
import FloatingCallButtons from '../../Components/Common/FloatingCallButtons';


import SearchPage from '../Pages/SearchPage';

const Layout = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar onSearch={handleSearch} />
      <main className="flex-grow">
        {searchResults !== null ? (
          <SearchPage filteredEvents={searchResults} />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
<FloatingButtons />
<FloatingCallButtons />
      
    </div>
  );
};

export default Layout;
