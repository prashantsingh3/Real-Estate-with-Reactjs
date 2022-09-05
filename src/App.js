import "./styles.css";
import Navbar from "./components/Navbar";
// import FilterUi from "./components/FilterUi";
import Screen from "./components/Screen";

export default function App() {
  let data = [
    {
      location: "New York,USA",
      image:
        "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 541,
      property_type: "Houses",
      place: "Palm Harbor",
      address: "2699 Green Valley, HighLand Lake",
      beds: 4,
      bathrooms: 5,
      area: "6X9"
    },
    {
      location: "New York,USA",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      price: 341,
      property_type: "Houses",
      place: "Faulner Ave",
      address: "Faver elve, Asheville, NC",
      beds: 3,
      bathrooms: 2,
      area: "2X5"
    },
    {
      location: "New York,USA",
      image:
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 941,
      property_type: "Apartment",
      place: "Fancascal District, DownHall",
      address: "525 Rodely Stone Lane, Apt 2KP",
      beds: 4,
      bathrooms: 3,
      area: "9X13"
    },
    {
      location: "New York,USA",
      image:
        "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 523,
      property_type: "Houses",
      place: "Pink Valley, Eastern Coast",
      address: "98 Columpus Avenlly, Apt 35K",
      beds: 2,
      bathrooms: 2,
      area: "3X7"
    },
    {
      location: "New York,USA",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 241,
      property_type: "Apartment",
      place: "Yorlkvilye,Urban Mallan",
      address: "Faver elve, Asheville, NC",
      beds: 4,
      bathrooms: 3,
      area: "2X8"
    },
    {
      location: "Chennai, India",
      image:
        "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 846,
      property_type: "Apartment",
      place: "Majaratpa City",
      address: "959 Tathwade, Pikari Chindawala",
      beds: 4,
      bathrooms: 3,
      area: "6X9"
    },
    {
      location: "Chennai, India",
      image:
        "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 546,
      property_type: "Houses",
      place: "Sanratpa Hall Town",
      address: "763 Kalththe, Sanghli",
      beds: 5,
      bathrooms: 3,
      area: "5X6"
    },
    {
      location: "Chennai, India",
      image:
        "https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 746,
      property_type: "Apartment",
      place: "Tanshara Hill City",
      address: "763 Hashnagar, Tanhi",
      beds: 6,
      bathrooms: 2,
      area: "7X6"
    },
    {
      location: "Chennai, India",
      image:
        "https://images.pexels.com/photos/460695/pexels-photo-460695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 563,
      property_type: "Houses",
      place: "Visam Parath",
      address: "23K Bhuman Nagar",
      beds: 4,
      bathrooms: 2,
      area: "8X6"
    },
    {
      location: "Chennai, India",
      image:
        "https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 765,
      property_type: "Apartment",
      place: "Aakash Puri Colony",
      address: "67R Radarpuri Nagar",
      beds: 4,
      bathrooms: 2,
      area: "8X6"
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Screen data={data} />
    </div>
  );
}
