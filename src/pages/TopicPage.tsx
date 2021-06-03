import './TopicPage.css';
import { Switch, Route, Link } from 'react-router-dom';
import studyIcon from '../imgs/study.svg';
import interestingIdeaIcon from '../imgs/interesting_idea.svg';
import fastIcon from '../imgs/fast.svg';

function TopicPage() {
  return (
    <div>
      <h1>Topic</h1>
      <h1 id="highlighted-big-heading">The Virtual Dom</h1>
      <br />

      <Switch>
        <Route path="/topic/agenda" exact>
          <br />
          <ol>
            <li>What is DOM?</li>
            <li>Some problems when working with the DOM</li>
            <li>What is Virtual DOM?</li>
            <li>How we benefit from Virtual DOM</li>
          </ol>
        </Route>

        <Route path="/topic" exact>
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
                src={studyIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Came accross during study</p>
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
                src={interestingIdeaIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Interesting idea that</p>
              <p>React introduced</p>
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
                src={fastIcon}
                alt=""
                style={{ width: '200px', marginBottom: '45px' }}
              />
              <p>Reason that make React fast</p>
            </li>
          </ul>
        </Route>
      </Switch>

      <br />
      <br />

      <nav className="page-inner-navigation">
        <ul>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
          <li>
            <Link to="/topic/agenda">Agenda</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopicPage;

/* <p>Came accross during React study</p>
<p>Interesting feature that React introduce</p>
<p>One of the reason that make React fast</p> */
