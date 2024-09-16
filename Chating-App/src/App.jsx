// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Channel1 from './components/channel1';
import Channel2 from './components/channel2';
import User1 from './components/user1';
import User2 from './components/user2';
import User3 from './components/user3';
import './App.css';

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Router>
      <div className="app">
        <Sidebar setSelected={setSelected} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel/channel1" element={<Channel1 />} />
          <Route path="/channel/channel2" element={<Channel2 />} />
          <Route path="/dm/user1" element={<User1 />} />
          <Route path="/dm/user2" element={<User2 />} />
          <Route path="/dm/user3" element={<User3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
