import React from "react";
import Appsarraylist from "../../array/Sidebarsubarray/Appsarraylist";
import "../Sidenavbar/sidenavbar.css";

const AppsList = () => {
  return (
    <div className="submenu_container">
      {Appsarraylist.map((dat) => {
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

export default AppsList;
