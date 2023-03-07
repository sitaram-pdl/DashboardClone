import React from "react";
import "../Sidenavbar/sidenavbar.css";
import ElementsArrayList from "../../array/Sidebarsubarray/ElementsArrayList";

const ElementsItemList = () => {
  return (
    <div className="submenu_container">
      {ElementsArrayList.map((dat) => {
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

export default ElementsItemList;
