import React from "react";
import MenuLevelArrayList from "../../array/Sidebarsubarray/MenuLevelsArrayList";

const MenuItemList = () => {
  return (
    <div className="submenu_container">
      {MenuLevelArrayList.map((dat) => {
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

export default MenuItemList;
