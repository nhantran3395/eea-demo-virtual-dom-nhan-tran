import './AboutPage.css';
import myPicture from '../imgs/my_picture.jpg';

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <div id="about-image-container">
        <img src={myPicture} alt="me" id="about-image" />
      </div>
      <p>Nhan Tran</p>
      <p>Ho Chi Minh city</p>
    </div>
  );
}

export default AboutPage;
