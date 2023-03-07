import React from "react";
import "../Map/worldmap.css";

const WorldMap = () => {
  return (
    <div className="worldmap_container">
      <div className="worldmap_heading">
        <h3>Sales Revenue By Customers In USA</h3>
        <p>Sales Performance of all states in the UNited States</p>
      </div>
      <div className="map_img_div">
        <img src="src/assets/map.png" alt="flag" />
      </div>
    </div>
  );
};

export default WorldMap;
