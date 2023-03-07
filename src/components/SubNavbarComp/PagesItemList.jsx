import React from "react";
import PagesArrayList from "../../array/Sidebarsubarray/PagesArrayList";

const PagesItemList = () => {
  return (
    <div className="submenu_container">
      {PagesArrayList.map((dat) => {
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

export default PagesItemList;
