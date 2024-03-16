import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ searchTerm, handleSearchChange }) => {
  const navigateToGitHub = () => {
    const githubRepoUrl = 'https://github.com/Kiran1689/Awesome-Dev-Portfolios';
    window.open(githubRepoUrl, '_blank');
  };
  
  const navigateToHome = () => {
    const HomeUrl = '/';
    window.open(HomeUrl, '_self');
  };
  
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <div className="button" onClick={navigateToHome}>
          <div className="box">A</div>
          <div className="box">W</div>
          <div className="box">E</div>
          <div className="box">S</div>
          <div className="box">O</div>
          <div className="box">M</div>
          <div className="box">E</div>
        </div>
      </div>
      <div className="search-filter">
          <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by Name"
        />
        {/*
        <button className='signup' onClick={navigateToSignUp}>
          <span>sign UP</span>
        </button>
        */}
        <button onClick={navigateToGitHub} className='text-gray-300'>
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-100 duration-200 hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
