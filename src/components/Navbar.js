import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ searchTerm, handleSearchChange }) => {
  const navigateToGitHub = () => {
    const githubRepoUrl = 'https://github.com/Kiran1689/Awesome-Dev-Portfolios';
    window.open(githubRepoUrl, '_blank');
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
        <div class="button">
          <div class="box">A</div>
          <div class="box">W</div>
          <div class="box">E</div>
          <div class="box">S</div>
          <div class="box">O</div>
          <div class="box">M</div>
          <div class="box">E</div>
        </div>
      </div>
      <div className="search-filter">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by Name"
        />
        <button class="Btn" 
        onClick={navigateToGitHub} >
        <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
        STAR ON GITHUB
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
