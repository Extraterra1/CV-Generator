import './ExpertiseBox.css';

export default function ExpertiseBox({ items }) {
  return (
    <div className="expertise-container">
      <div className="expertise-box"></div>
      <div className="expertise-form">
        <label htmlFor="expertise">Add New</label>
        <input type="text" name="expertise" id="expertise" />
        <button className="expertise-button">Add</button>
      </div>
    </div>
  );
}
