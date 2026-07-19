import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Searchbar from "./components/Searchbar"; // Import the new component
import { supabase } from "./supabaseClient";

const App = () => {
  const [session, setSession] = useState(null);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userVote, setUserVote] = useState(null);

  const checkAdmin = (user) => {
    if (user && user.email === process.env.REACT_APP_ADMIN_EMAIL) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const fetchUserVote = async () => {
    if (!session) return;
    const { data, error } = await supabase
      .from('user_votes')
      .select('portfolio_id')
      .eq('user_id', session.user.id)
      .single();
    
    if (data) {
      setUserVote(data.portfolio_id);
    } else {
      setUserVote(null);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      checkAdmin(session?.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        checkAdmin(session?.user);
      }
    );

    return () => subscription.unsubscribe();
  }, []);
  
  const fetchCards = async () => {
    const { data, error } = await supabase
      .from("portfolios")
      .select("*")
      .order("vote_count", { ascending: false })
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching cards:", error);
    } else {
      setCards(data);
    }
  };

  useEffect(() => {
    fetchCards();
    if (session) {
      fetchUserVote();
    }
  }, [session]);

  useEffect(() => {
    let filteredData = cards;
    if (searchTerm) {
      filteredData = cards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
        // When search term is empty, use the original sorted list
        filteredData = cards;
    }
    setFilteredCards(filteredData);
  }, [cards, searchTerm]);

  const handleVote = async (cardId) => {
    if (!session) {
      alert("You must be logged in to vote.");
      return;
    }

    const { error } = await supabase.rpc('handle_vote', {
      portfolio_id_to_vote_for: cardId
    });
      
    if (error) {
      console.error("Error updating vote count:", error);
      alert("Failed to cast vote. Please try again.");
    } else {
      await fetchCards();
      await fetchUserVote();
    }
  };
  
  const handleCardClick = (card) => setSelectedCard(card);
  const handleCloseModal = () => setSelectedCard(null);

  return (
    <Router>
      <Navbar session={session} isAdmin={isAdmin} />
      <main className="pt-16 lg:pt-[72px]">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolios"
            element={
              <>
                {/* Add the Searchbar to the page */}
                <Searchbar 
                  searchTerm={searchTerm}
                  handleSearchChange={(e) => setSearchTerm(e.target.value)}
                />
                <CardList
                  cards={filteredCards}
                  onCardClick={handleCardClick}
                  onVote={handleVote}
                  session={session}
                  userVote={userVote}
                />
                <CardModal card={selectedCard} onClose={handleCloseModal} />
              </>
            }
          />
          <Route path="/admin" element={isAdmin ? <Admin /> : <Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;