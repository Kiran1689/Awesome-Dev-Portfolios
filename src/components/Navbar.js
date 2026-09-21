import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Navbar = ({ session, isAdmin }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navigateToGitHub = () => {
    window.open('https://github.com/Kiran1689/Awesome-Dev-Portfolios', '_blank');
  };

  return (
    <header className="bg-black border-b border-gray-500 top-0 right-0 left-0 z-50 fixed backdrop-blur-md">
      <div className="mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center no-underline hover:no-underline font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-pink-500 to-purple-500">AWESOME</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/portfolios" className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Portfolios</Link>
            <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Documentation</a>
            <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/issues/new/choose" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Help</a>
            {isAdmin && <Link to="/admin" className="text-base font-medium text-yellow-400 focus:text-white hover:text-white">Admin</Link>}
          </div>

          {/* Auth & GitHub Icon */}
          <div className="hidden lg:flex items-center space-x-5">
            {session ? (
              <button onClick={handleLogout} className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Logout</button>
            ) : (
              <>
                <Link to="/login" className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Login</Link>
                <Link to="/signup" className="text-base font-medium text-gray-300 focus:text-white hover:text-white">Sign Up</Link>
              </>
            )}
            <button onClick={navigateToGitHub} className='text-gray-300'>
              <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6 hover:stroke-white">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setShowNavbar(!showNavbar)} type="button" className="p-2 -m-2 text-white">
              {showNavbar ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {showNavbar && (
          <div className="lg:hidden px-2 pt-2 pb-4 space-y-2">
            <Link to="/portfolios" className="block text-base font-medium text-gray-300 focus:text-white hover:text-white">Portfolios</Link>
            <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="block text-base font-medium text-gray-300 focus:text-white hover:text-white">Documentation</a>
            <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/issues/new/choose" target="_blank" rel="noopener noreferrer" className="block text-base font-medium text-gray-300 focus:text-white hover:text-white">Help</a>
            {isAdmin && <Link to="/admin" className="block text-base font-medium text-yellow-400 focus:text-white hover:text-white">Admin</Link>}
            <hr className="border-gray-700"/>
            {session ? (
              <button onClick={handleLogout} className="w-full text-left block text-base font-medium text-gray-300 focus:text-white hover:text-white">Logout</button>
            ) : (
              <>
                <Link to="/login" className="block text-base font-medium text-gray-300 focus:text-white hover:text-white">Login</Link>
                <Link to="/signup" className="block text-base font-medium text-gray-300 focus:text-white hover:text-white">Sign Up</Link>
              </>
            )}
            <div className="pt-4">
              <button onClick={navigateToGitHub} className='text-gray-300 flex items-center gap-2'>
                <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub Repo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;