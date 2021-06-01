import domConcept from '../dom_concept.jpg';
import './DomPage.css';

function DomPage() {
  return (
    <div>
      <h1>DOM</h1>
      <div id="dom-image-container">
        <img src={domConcept} alt="dom concept" id="dom-image" />
      </div>
    </div>
  );
}

export default DomPage;
