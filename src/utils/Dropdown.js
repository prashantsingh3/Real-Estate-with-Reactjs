import "./Dropdown.css";
export default function Dropdown({ heading, options }) {
  return (
    <div>
      <div className="dd_container">
        <div>{heading}</div>

        <select>
          <option>{options}</option>
        </select>
      </div>
    </div>
  );
}
