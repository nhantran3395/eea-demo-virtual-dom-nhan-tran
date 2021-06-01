import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import domConcept from '../imgs/dom_concept.jpg';
import domExample from '../imgs/dom_example.jpg';
import './DomPage.css';

function DomPage() {
  return (
    <div>
      <h1>DOM</h1>
      <nav className="page-inner-navigation">
        <ul>
          <li>
            <Link to="/dom">What is the DOM?</Link>
          </li>
          <li>
            <Link to="/dom/example">Example</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dom" exact>
          <div className="dom-image-container">
            <img src={domConcept} alt="dom concept" className="dom-image" />
          </div>
          <ul>
            <li>Document object model</li>
            <li>A representation of a webpage</li>
            <li>Each node in the tree represent an HTML element</li>
          </ul>
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
