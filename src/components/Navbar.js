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
        <button class="Btn" onClick={navigateToGitHub}>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
