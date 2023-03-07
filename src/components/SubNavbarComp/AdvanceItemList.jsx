import React from "react";
import AdvanceArrayList from "../../array/Sidebarsubarray/AdvanceArrayList";

const AdvanceItemList = () => {
  return (
    <div className="submenu_container">
      {AdvanceArrayList.map((dat) => {
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

export default AdvanceItemList;
