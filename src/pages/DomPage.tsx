import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import domConcept from '../imgs/dom_concept.jpg';
import domExample from '../imgs/dom_example.jpg';
import './DomPage.css';

function DomPage() {
  return (
    <div>
      <h1>DOM</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dom">concept</Link>
          </li>
          <li>
            <Link to="/dom/example">example</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dom" exact>
          <div className="dom-image-container">
            <img src={domConcept} alt="dom concept" className="dom-image" />
          </div>
        </Route>
        <Route path="/dom/example" exact>
          <div className="dom-image-container">
            <img src={domExample} alt="dom example" className="dom-image" />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default DomPage;
