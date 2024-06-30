import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Destinations from './pages/Destinations';
import GuideProfile from './pages/GuideProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

const App = () => {
  const initialBlogs = [
    { id: 1, title: 'Exploring Kudla Cuisine', content: 'Discover the rich flavors and traditional dishes of Kudla, from aromatic seafood curries to spicy vegetarian delights.' },
    { id: 2, title: 'The Serene Beaches of Kudla', content: 'Explore the pristine beaches of Kudla, where turquoise waters meet golden sands, offering tranquility and breathtaking sunsets.' },
    { id: 3, title: 'Cultural Festivals in Kudla', content: 'Immerse yourself in the vibrant cultural festivals of Kudla, celebrating its diverse heritage with music, dance, and local arts.' },
    { id: 4, title: 'Adventure Activities in Kudla', content: 'Embark on thrilling adventures in Kudla, from water sports along the coast to trekking in lush green hills, offering adrenaline and unforgettable experiences.' },
    { id: 5, title: 'Historical Treasures of Kudla', content: 'Uncover the historical treasures of Kudla, with ancient temples, forts, and architectural marvels that reflect its rich past and cultural significance.' },
    { id: 6, title: 'Ecotourism in Kudla', content: 'Experience the natural wonders of Kudla through ecotourism initiatives, promoting conservation efforts and sustainable travel practices.' },
  ];

  const initialDestinations = [];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [destinations, setDestinations] = useState(initialDestinations);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const addDestination = (newDestination) => {
    setDestinations([...destinations, newDestination]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog blogPosts={blogs} />} />
        <Route path="/destinations" element={<Destinations destinations={destinations} />} />
        <Route path="/guideprofile" element={<GuideProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard addBlog={addBlog} deleteBlog={deleteBlog} addDestination={addDestination} blogPosts={blogs} destinations={destinations} /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
