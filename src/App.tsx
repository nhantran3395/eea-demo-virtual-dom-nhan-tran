import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DomPage from './pages/DomPage';
import LearnedPage from './pages/LearnedPage';
import ProblemPage from './pages/ProblemPage';
import ProblemSolvedPage from './pages/ProblemSolvedPage';
import TopicPage from './pages/TopicPage';
import VirtualDomPage from './pages/VirtualDomPage';
import WrapUpPage from './pages/WrapUpPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/learned">Learned</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
            <li>
              <Link to="/dom">DOM</Link>
            </li>
            <li>
              <Link to="/problem">Problems</Link>
            </li>
            <li>
              <Link to="/virtualdom">Virtual DOM</Link>
            </li>
            <li>
              <Link to="/problemsolved">Problems Solved</Link>
            </li>
            <li>
              <Link to="/wrapup">Wrap Up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/learned">
            <LearnedPage />
          </Route>
          <Route path="/topic">
            <TopicPage />
          </Route>
          <Route path="/dom">
            <DomPage />
          </Route>
          <Route path="/problem">
            <ProblemPage />
          </Route>
          <Route path="/virtualdom">
            <VirtualDomPage />
          </Route>
          <Route path="/problemsolved">
            <ProblemSolvedPage />
          </Route>
          <Route path="/wrapup">
            <WrapUpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
