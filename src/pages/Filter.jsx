import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
 

  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
 
  const handleOnChange = (e) => {
    const option = e.target.value;
    let newCategoryOptions = [...category];
    if (category.includes(option)) {
      newCategoryOptions.splice(newCategoryOptions.indexOf(option), 1);
    } else {
      newCategoryOptions.push(option);
    }
    setCategory(newCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);
  //sorting
  //  const sorthandle = (e) => {
  //    const { value } = e.target;
  //    if (value === "asc") {
  //      const newdata = price.sort((a, b) => {
  //        return a.price - b.price;
  //      });
  //      setPrice([...newdata]);
  //      console.log(newdata);
  //    }
  //    if (value === "desc") {
  //      const newdata = price.sort((a, b) => {
  //        return b.price - a.price;
  //      });
  //      setPrice([...newdata]);
  //      console.log(newdata);
  //    }
  //  };
  //   useEffect(() => {
  //       if (price) {
  //           setSearchParam({ price });
  //       }
  //   }, [price, setSearchParam]);
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  return (
   
      <div>
        {/* <h3>
          Sort by Price :-{" "}
          <span>
            <select onChange={handleSort}>
              <option value="/">Sort by price</option>
              <option value="desc">High to Low</option>
              <option value="asc">Low to High</option>
            </select>
          </span>
        </h3> */}
        <h3 style={{ textAlign: "center" }}>Filters</h3>
        <div>Category</div>
        <div>
          <div>
            <input
              type="checkbox"
              value="deluxe"
              onChange={handleOnChange}
              checked={category.includes("deluxe")}
            />
            <label>Deluxe</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="family"
              onChange={handleOnChange}
              checked={category.includes("family")}
            />
            <label>Family</label>
          </div>
          <div>
            <input
              onChange={handleOnChange}
              type="checkbox"
              value="suite"
              checked={category.includes("suite")}
            />
            <label>Suite</label>
          </div>
        </div>
      </div>
    
  );
};

export default Filter;

