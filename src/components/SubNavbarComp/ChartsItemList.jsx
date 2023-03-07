import React from "react";
import "../Sidenavbar/sidenavbar.css";
import Chartsarraylist from "../../array/Sidebarsubarray/Chartsarraylist";

const ChartsItemList = () => {
  return (
    <div className="submenu_container">
      {Chartsarraylist.map((dat) => {
        return (
          <>
            <div className="submenu_card">
              <ion-icon name={dat.icon}></ion-icon>
              <p>{dat.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ChartsItemList;
