import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Home from './pages/Home';
import Search from './pages/Search';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* Remove all default styles */}
        <Normalize />
        {/* Set custom Global Styles */}
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/javascript" element={<Search />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
