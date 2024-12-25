import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // use Routes instead of Switch for react-router v6+
import Home from './components/Home';  // Home component
import Edit from './components/Edit';  // Edit component
import Add from './components/Add';    // Add component
import Nav from './components/Nav';    // Nav component

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} /> {/* เส้นทางสำหรับหน้าแก้ไข */}
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;