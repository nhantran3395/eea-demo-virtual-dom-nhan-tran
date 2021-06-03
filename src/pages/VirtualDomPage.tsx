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
              How Virtual DOM manage changes?
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/virtualdom" exact>
          <div className="dom-image-container">
            <img src={vdom} alt="virtual dom concept" className="vdom-image" />
            <small>
              <i>image is copied from an article on teropa.info</i>
            </small>
          </div>

          <br />

          <ol>
            <li>Serve as a layer between the code and the DOM</li>
            <li>Is a JS plain object copy of the DOM</li>
            <li>Manupulating on Virtual DOM first</li>
          </ol>
        </Route>
        <Route path="/virtualdom/compare" exact>
          <div className="dom-image-container">
            <img
              src={vdomCompare}
              alt="virtual dom compare"
              className="vdom-image"
            />
            <small>
              <i>image is copied from an article on teropa.info</i>
            </small>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default VirtualDomPage;
