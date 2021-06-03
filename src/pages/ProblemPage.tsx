import { Switch, Route, Link } from 'react-router-dom';
import reUpdateIcon from '../imgs/reupdate.svg';
import slowIcon from '../imgs/slow.svg';
import efficientlyIcon from '../imgs/efficiently.svg';
import domProblems from '../imgs/dom_problems.jpg';

function ProblemPage() {
  return (
    <div>
      <h1>Problems</h1>

      <nav className="page-inner-navigation">
        <ul>
          <li>
            <Link to="/problem">Problem</Link>
          </li>
          <li>
            <Link to="/problem/example">Example</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/problem/example" exact>
          <div className="dom-image-container">
            <img src={domProblems} alt="dom problems" className="dom-image" />
          </div>
        </Route>

        <Route path="/problem" exact>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '30px  ',
            }}>
            <li
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <img
                src={reUpdateIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Changes to the DOM trigger browser to rerender contents</p>
            </li>
            <li
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <img
                src={slowIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Re-render are slow</p>
            </li>
            <li
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <img
                src={efficientlyIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Would want to manage updating and rerendering efficiently</p>
            </li>
          </ul>
        </Route>
      </Switch>

      <br />
    </div>
  );
}

export default ProblemPage;
