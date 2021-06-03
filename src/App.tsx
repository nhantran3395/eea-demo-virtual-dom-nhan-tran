import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import DomPage from './pages/DomPage';
import LearnedPage from './pages/LearnedPage';
import ProblemPage from './pages/ProblemPage';
import BenefitPage from './pages/BenefitPage';
import TopicPage from './pages/TopicPage';
import VirtualDomPage from './pages/VirtualDomPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">About</Link>
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
              <Link to="/benefit">Benefits</Link>
            </li>
            <li>
              <Link to="/thankyou">Thank You</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
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
          <Route path="/benefit">
            <BenefitPage />
          </Route>
          <Route path="/thankyou">
            <ThankYouPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
