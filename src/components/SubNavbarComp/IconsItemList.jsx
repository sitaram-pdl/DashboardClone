import React from "react";
import Iconsarraylist from "../../array/Sidebarsubarray/Iconsarraylist";
import "../Sidenavbar/sidenavbar.css";

const IconsItemList = () => {
  return (
    <div className="submenu_container">
      {Iconsarraylist.map((dat) => {
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

export default IconsItemList;
