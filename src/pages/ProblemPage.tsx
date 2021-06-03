import reUpdateIcon from '../imgs/reupdate.svg';
import slowIcon from '../imgs/slow.svg';
import efficientlyIcon from '../imgs/efficiently.svg';

function ProblemPage() {
  return (
    <div>
      <h1>Problems</h1>
      <br />
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
    </div>
  );
}

export default ProblemPage;
