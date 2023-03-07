import React from "react";
import FormsArrayList from "../../array/Sidebarsubarray/FormsArrayList";

const FormsItemsList = () => {
  return (
    <div className="submenu_container">
      {FormsArrayList.map((dat) => {
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

export default FormsItemsList;
