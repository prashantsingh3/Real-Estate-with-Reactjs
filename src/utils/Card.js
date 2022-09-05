import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { BsTextareaResize } from "react-icons/bs";

export default function Card(data) {
  console.log(data.info[0]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {data.info.map((element, i) => (
        <div className="card_container">
          <img src={`${element.image}`} alt="image" />
          <div className="card_info">
            <div className="card_info_price">
              <div>
                <strong>${element.price}</strong>/month
              </div>
              <div>
                <FaRegHeart />
              </div>
            </div>

            <div className="title_property">
              <h3>{element.place}</h3>
              <p>{element.address}</p>
            </div>
            <div id="card_icons">
              <MdOutlineKingBed />
              <small>{element.beds} Beds</small>
              <BiBath />
              <small>{element.bathrooms} Bathrooms</small>
              <BsTextareaResize />
              <small>
                {element.area} m<sup>2</sup>
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
