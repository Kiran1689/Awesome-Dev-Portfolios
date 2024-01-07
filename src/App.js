
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import CardModal from './components/CardModal'; 
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SignUp from './components/SignUp'

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const importAll = (context) => context.keys().map(context);
    let cardData = importAll(require.context('./profileData', false, /\.json$/));

    // Sort cards alphabetically by name
    cardData = cardData.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA.localeCompare(nameB);
    });

    setCards(cardData);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    filterCards();
    // eslint-disable-next-line
  }, [cards, searchTerm]);

  const filterCards = () => {
    let filteredData = cards;

    if (searchTerm) {
      filteredData = filteredData.filter(
        (card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCards(filteredData);
  };
  

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <>
                <Navbar
                  searchTerm={searchTerm}
                  handleSearchChange={(event) => setSearchTerm(event.target.value)}
                />
                <CardList cards={filteredCards} onCardClick={(card) => handleCardClick(card)} />
                <CardModal card={selectedCard} onClose={handleCloseModal} />
                <ScrollToTopButton />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
