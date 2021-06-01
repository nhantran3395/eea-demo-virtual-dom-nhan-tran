import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import vdom from '../imgs/vdom.svg';
import vdomCompare from '../imgs/vdom_compare.svg';
import './VirtualDom.css';

function VirtualDomPage() {
  return (
    <div>
      <h1>Virtual DOM</h1>
      <nav className="page-inner-navigation">
        <ul>
          <li>
            <Link to="/virtualdom">What is Virtual DOM?</Link>
          </li>
          <li>
            <Link to="/virtualdom/compare">
              How to determine what has been changed
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/virtualdom" exact>
          <div className="dom-image-container">
            <img src={vdom} alt="virtual dom concept" className="vdom-image" />
          </div>
        </Route>
        <Route path="/virtualdom/compare" exact>
          <div className="dom-image-container">
            <img
              src={vdomCompare}
              alt="virtual dom compare"
              className="vdom-image"
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default VirtualDomPage;
