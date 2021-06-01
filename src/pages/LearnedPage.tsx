import htmlCssIcon from '../imgs/html_css.svg';
import jsIcon from '../imgs/js.svg';
import reactIcon from '../imgs/react.svg';

function LearnedPage() {
  return (
    <div>
      <h1>Learned</h1>
      <p>Learn from this 2 weeks</p>
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
            src={htmlCssIcon}
            alt=""
            style={{ width: '200px', marginBottom: '45px' }}
          />
          <p>HTML & CSS</p>
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
            src={jsIcon}
            alt=""
            style={{ width: '200px', marginBottom: '45px' }}
          />
          <p>JavaScript on Browser</p>
          <p>(DOM, Event, Fetch, etc.)</p>
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
            src={reactIcon}
            alt=""
            style={{ width: '280px', marginBottom: '45px' }}
          />

          <p>Basics of React</p>
          <p>(Components, Router, etc.)</p>
        </li>
      </ul>
    </div>
  );
}

export default LearnedPage;
