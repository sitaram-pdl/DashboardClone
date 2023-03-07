import React from "react";
import TablesArrayList from "../../array/Sidebarsubarray/TablesArrayList";

const TableItemsList = () => {
  return (
    <div className="submenu_container">
      {TablesArrayList.map((dat) => {
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

export default TableItemsList;
