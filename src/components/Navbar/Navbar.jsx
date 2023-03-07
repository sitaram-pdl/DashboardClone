import React from "react";
import "../Navbar/navbar.css";

const Navbar = ({ handelToggle }) => {
  return (
    <div className="navbar_container">
      <div className="left_navbar">
        <div className="menu_icon" onClick={handelToggle}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="search_div">
          <input type="text" placeholder="Search for anything..." />
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
      <div className="right_navbar">
        <div className="flag_div">
          <img src="src/assets/usflag.png" alt="flag" />
        </div>
        <div className="icon_div">
          <ul>
            <li>
              <ion-icon name="moon-outline"></ion-icon>
            </li>
            <li>
              <ion-icon name="mail-outline"></ion-icon>
              <span className="active message">
                <div className="notify_circle delay1"></div>
              </span>
            </li>
            <li>
              <ion-icon name="notifications-outline"></ion-icon>
              <span className="active notification">
                <div className="notify_circle delay1"></div>
              </span>
            </li>
            <li>
              <ion-icon name="expand-outline"></ion-icon>
            </li>
          </ul>
        </div>
        <div className="profile_menu__div">
          <div className="user_profile">
            <img src="src/assets/profile.jpg" alt="flag" />
          </div>
          <div className="menu_setting">
            <ul>
              <li>
                <ion-icon name="menu-outline"></ion-icon>
              </li>
              <li className="setting">
                <ion-icon name="settings-outline"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
