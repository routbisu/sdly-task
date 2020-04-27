import React from 'react';
import './scss/layout.scss';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/style';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="main-container">
        <Router>
          <Sidebar />
          <div className="page-content">
            <Route exact path="/" render={Home} />
            <Route exact path="/topic/:tag" render={Topic} />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
