import React from "react";
import UtilitiesArrayList from "../../array/Sidebarsubarray/UtilitiesArrayList";

const UtilitiesItemList = () => {
  return (
    <div className="submenu_container">
      {UtilitiesArrayList.map((dat) => {
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

export default UtilitiesItemList;
