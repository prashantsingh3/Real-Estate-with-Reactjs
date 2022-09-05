import Dropdown from "../utils/Dropdown";
import "./FilterUi.css";
export default function FilterUi(props) {
  // console.log( props.data[7].location)
  function uniqueCountry() {
    let arr = props.data;
    let arr2 = [];
    arr.map((ele, i) => arr2.push(ele.location));
    // console.log(arr2);
    arr2.sort();

    for (let i = 0; i < arr2.length - 1; i++) {
      if (arr2[i] === arr2[i + 1]) {
        arr2.splice(i, 1);
        i--;
      }
    }
    return arr2;
    // console.log(arr2);
    // console.log(props.data);
  }

  return (
    <div>
      <div className="filter_container">
        <div className="filter_box">
          <Dropdown heading="Location" options="New York, USA " />
        </div>
        <div className="date_boxs">
          <div className="filter_box_when">When</div>

          <div id="start_move">Start Move-in Date</div>
          <input type="date" className="date_box" />
        </div>

        <div className="filter_box">
          <Dropdown heading="Price" options="$500-$2500" />
        </div>
        <div className="filter_box">
          <Dropdown heading="Property Type" options="Houses" />
        </div>
        <button className="filter_btn">Search</button>
      </div>
    </div>
  );
}
