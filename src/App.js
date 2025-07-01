import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Plays from "./pages/Plays";
import Streams from "./pages/Streams";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import MovieDetails from "./pages/MovieDetails";
import Tickets from "./pages/Tickets";
import Buzz from "./pages/Buzz";
import Corporates from "./pages/Corporates";
import Offers from "./pages/Offers";
import Gifts from "./pages/Gifts";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/my-tickets" element={<Tickets />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/events" element={<Events />} />
        <Route path="/buzz" element={<Buzz />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
