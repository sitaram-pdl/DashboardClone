import React from "react";
import MapsArrayList from "../../array/Sidebarsubarray/MapsArrayList";

const MapsItemList = () => {
  return (
    <div className="submenu_container">
      {MapsArrayList.map((dat) => {
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

export default MapsItemList;
