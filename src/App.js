import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search/Search.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
