import React, { useState,useEffect } from "react";
import Filter from "./Filter";

const User = () => {
    const [data, setData] = useState([]);
  const [adults, setAdults] = useState("");
  const [capacity, setCapacity] = useState("");
  const [cost, setCost] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
    const [typerooms, setTypeRooms] = useState("");
    const [bedtypes, setBedTypes] = useState("");
    const [img_url, setImg_Url] = useState("");
    const [booked, setBooked] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    var hotelobj = {
      adults: adults,
      capacity: capacity,
      cost: cost,
      category: category,
        typerooms: typerooms,
        bedtypes: bedtypes,
        img_url: img_url,
      booked:booked,
    };
    fetch("https://api-pawan-masai.herokuapp.com/hotels", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(hotelobj),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
    };
   const FetchData = () => {
     fetch("https://api-pawan-masai.herokuapp.com/hotels")
       .then((res) => res.json())
       .then((res) => {
         setData(res);
       })
       .catch((err) => {
         console.log(err);
       });
   };
   useEffect(() => {
     FetchData();
   }, []);
    const sorthandle = (e) => {
      const { value } = e.target;

      if (value === "asc") {
        const newdata = data.sort((a, b) => {
          return a.cost - b.cost;
        });
        setData([...newdata]);
        console.log(newdata);
      }
      if (value === "desc") {
        const newdata = data.sort((a, b) => {
          return b.cost - a.cost;
        });
        setData([...newdata]);
        console.log(newdata);
      }
    };

  


    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="/">Category</option>
            <option value="deluxe">Deluxe</option>
            <option value="family">Family</option>
            <option value="suite">Suite</option>
          </select>
          <select
            value={typerooms}
            onChange={(e) => setTypeRooms(e.target.value)}
          >
            <option value="/">Type of Rooms</option>
            <option value="ac">AC</option>
            <option value="non-ac">Non-Ac</option>
          </select>
          <select
            value={bedtypes}
            onChange={(e) => setBedTypes(e.target.value)}
          >
            <option value="/">Type of Bed</option>
            <option value="double">Double</option>
            <option value="single">Single</option>
          </select>
          <input
            type="text"
            value={adults}
            placeholder="Adults"
            onChange={(e) => setAdults(e.target.value)}
          />
          <input
            type="text"
            value={capacity}
            placeholder="Capacity"
            onChange={(e) => setCapacity(e.target.value)}
          />

          <input
            type="text"
            value={cost}
            placeholder="Price"
            onChange={(e) => setCost(e.target.value)}
          />
          <input
            type="url"
            placeholder="img url"
            value={img_url}
            onChange={(e) => setImg_Url(e.target.value)}
          />
          <input
            type="checked"
            value={booked}
            onChange={(e) => setBooked(e.target.value)}
          />

          <button type="submit">Submit</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        <div>
          <h3>
            Sort by Price :-{" "}
            <span>
              <select onChange={sorthandle}>
                <option value="/">Sort by Population</option>
                <option value="desc">High to Low</option>
                <option value="asc">Low to High</option>
              </select>
            </span>
          </h3>
            </div>
            <div>
                <Filter/>
            </div>
        <div>
          {/* <h3>
            Filter by :-{" "}
            <span>
              <select onChange={filterhandle}>
                <option value="empty">Select Category </option>
                <option value="family">Family</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
              </select>
            </span>
          </h3> */}


        </div>

        <div>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>img</th>
              <th>type of room</th>
              <th>type of bed</th>
              <th>capacity</th>
              <th>Cost</th>
              <th>Booked</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.img}</td>
                <td>{item.typerooms}</td>
                <td>{item.bedtypes}</td>
                <td>{item.capacity}</td>
                <td>{item.cost}</td>
                <td>{item.booked}</td>
                {/* <td>
                  {" "}
                  <button onClick={}>Delete</button>
                </td>
                <td>
                  {" "}
                        <button onClick={}>Edit</button>
                        
                </td> */}
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    );
};
export default User;
