import './TopicPage.css';
import studyIcon from '../imgs/study.svg';
import interestingIdeaIcon from '../imgs/interesting_idea.svg';
import fastIcon from '../imgs/fast.svg';

function TopicPage() {
  return (
    <div>
      <h1>Topic</h1>
      <h1 id="highlighted-big-heading">The Virtual Dom</h1>
      <br />
      <ul
        style={{ display: 'flex', flexDirection: 'row', marginTop: '30px  ' }}>
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
    </div>
  );
}

export default TopicPage;

/* <p>Came accross during React study</p>
<p>Interesting feature that React introduce</p>
<p>One of the reason that make React fast</p> */
