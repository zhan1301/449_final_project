import React, { useState } from "react";
import "./style.css";

const Search = (props) => {
  const { getdatafromsearchcomponent } = props;

  // Initialize input value with useState
  const [inputvalue, setinputvalue] = useState("");

  // Function to update input value on change
  const handleinputvalue = (e) => {
    const { value } = e.target;
    setinputvalue(value);
  };

  // Function to handle form submission
  const handlesubmit = (e) => {
    e.preventDefault();
    // Call function passed down from parent component
    getdatafromsearchcomponent(inputvalue);
  };

  return (
    <div className="search">
      {/* Form with input and submit button */}
      <form className="search-form" onSubmit={handlesubmit}>
        <input
          className="input-box"
          onChange={handleinputvalue}
          value={inputvalue}
          placeholder="Enter an anime name. e.g. Naruto"
        />
        <button className="search-btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
