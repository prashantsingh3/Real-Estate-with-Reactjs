import Search from "./Search";
import FilterUI from "./FilterUi";
import Card from "../utils/Card";
import "./Screen.css"

export default function Screen(props) {
  console.log(props.data);
  return (
    <div className="screen_container">
      <Search />
      <FilterUI data={props.data} />
      <Card info={props.data} />
    </div>
  );
}
