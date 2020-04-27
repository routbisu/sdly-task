import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './scss/layout.scss';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/style';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';
import Sidebar from './components/Sidebar/Sidebar';
import { fetchFeaturedTopics } from './actions/questionActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedTopics());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="main-container">
        <Router>
          <Sidebar />
          <div className="page-content">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/topic/:tag">
              <Topic />
            </Route>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
