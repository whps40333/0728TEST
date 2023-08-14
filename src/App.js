import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header.jsx";
import Dropdown from "./components/Dropdown.jsx";
import Table from "./components/Table.jsx";
import Checkboxes from "./components/Checkboxes.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  const options = ["台北市", "新北市", "竹北市"];
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectedOption === "台北市") {
      fetch(
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
      )
        .then((response) => response.json())
        .then((jsonData) => {
          // Process the fetched data and store it in the state
          const processedData = jsonData.map((item) => ({
            id: item.sno,
            area: item.sarea,
            station: item.sna,
            bikesAvailable: parseInt(item.sbi),
            emptySlots: parseInt(item.bemp),
          }));

          // Filter the data based on selected districts
          const filteredData = processedData.filter((item) =>
            selectedDistricts.includes(item.area)
          );

          setData(filteredData); // 將這個調用移到這個位置
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedOption, selectedDistricts]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedDistricts([]); // Reset selected districts when the option changes
  };

  const handleDistrictSelect = (districts) => {
    setSelectedDistricts(districts);
  };

  const handleTaipeiOptionChange = () => {
    setSelectedOption("台北市");
    setSelectedDistricts([]); // 清空行政区选择
  };

  return (
    <div className="app">
      <Header />
      <Dropdown options={options} onSelect={handleOptionSelect} />
      <SearchBar onOptionChange={handleTaipeiOptionChange} />
      {selectedOption === "台北市" && (
        <>
          <Checkboxes onDistrictSelect={handleDistrictSelect} />
          <Table data={data} />
        </>
      )}
    </div>
  );
};

export default App;
