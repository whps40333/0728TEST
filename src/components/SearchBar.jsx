import React, { useState } from "react";

const SearchBar = ({ onOptionChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTaipeiSearch = () => {
    setSearchTerm("台北市");
    onOptionChange("台北市");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="請輸入搜尋關鍵字"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleTaipeiSearch}>搜尋</button>
    </div>
  );
};

export default SearchBar;
