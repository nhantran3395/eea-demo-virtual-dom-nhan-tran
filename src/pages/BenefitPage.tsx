import checkIcon from '../imgs/check.svg';

function BenefitPage() {
  return (
    <div>
      <h1>Benefits</h1>
      <div>
        Clever approach as it minimises the number of changes in the actual
        physical DOM nodes.
      </div>

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
            src={checkIcon}
            alt=""
            style={{ width: '200px', marginBottom: '45px' }}
          />
          <p>Only components that is changed </p>
          <p>will be re-rendered</p>
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
            src={checkIcon}
            alt=""
            style={{ width: '200px', marginBottom: '45px' }}
          />
          <p>Components that is NOT changed</p>
          <p> will stay the same</p>
        </li>
      </ul>
    </div>
  );
}

export default BenefitPage;
