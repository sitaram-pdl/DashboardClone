import React, { useState } from "react";
import "../Sidenavbar/sidenavbar.css";
import AppsList from "../SubNavbarComp/AppsList";
import ChartsItemList from "../SubNavbarComp/ChartsItemList";
import ElementsItemList from "../SubNavbarComp/ElementsItemList";
import IconsItemList from "../SubNavbarComp/IconsItemList";
import AdvanceItemList from "../SubNavbarComp/AdvanceItemList";
import MenuItemList from "../SubNavbarComp/MenuItemList";
import FormsItemsList from "../SubNavbarComp/FormsItemsList";
import TableItemsList from "../SubNavbarComp/TableItemsList";
import MapsItemList from "../SubNavbarComp/MapsItemList";
import PagesItemList from "../SubNavbarComp/PagesItemList";
import UtilitiesItemList from "../SubNavbarComp/UtilitiesItemList";

const Sidenavbar = ({ smallSidebar }) => {
  const [iconList, setIconList] = useState(false);
  const [chartList, setChartList] = useState(false);
  const [appsList, setAppsList] = useState(false);
  const [elementsList, setElementsList] = useState(false);
  const [advanceList, setAdvanceList] = useState(false);
  const [menuList, setMenuList] = useState(false);
  const [formsList, setFormsList] = useState(false);
  const [tablesList, setTablesList] = useState(false);
  const [mapsList, setMapsList] = useState(false);
  const [pagesList, setPagesList] = useState(false);
  const [utilitiesList, setUtilitiesList] = useState(false);
  return (
    <>
      <div
        className="sidenavbar_container"
        style={{ display: smallSidebar ? "block" : "none" }}
      >
        <div className="top_sidenabvar__container">
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="middle_sidenabvar__container">
          <div className="user_profile_div">
            <div className="profile_img_bg">
              <img src="src/assets/profile.jpg" alt="logo" />
            </div>
            <div className="active_div">
              <div className="circle delay1"></div>
              <div className="active_status"></div>
            </div>
          </div>
          <div className="profile_text__div">
            <h3>Petey Cruiser</h3>
            <p>Premium Member</p>
          </div>
        </div>
        <div className="bottom_sidenavbar__container">
          <div className="div-1">
            <h3>Main</h3>
            <div className="menu_item current_active">
              <div className="menu_left">
                <span>
                  <ion-icon name="albums-outline"></ion-icon>
                </span>
                <p>Index</p>
              </div>
            </div>
          </div>
          <div className="div-2">
            <h3>Generel</h3>
            <div
              className="menu_item "
              onClick={() => {
                if (!iconList) {
                  setIconList(true);
                } else {
                  setIconList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="happy-outline"></ion-icon>
                </span>
                <p>Icons</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {/* Icon Sub Component */}
            {iconList && <IconsItemList />}

            {/* ---------------------------------------------- */}
            <div
              className="menu_item"
              onClick={() => {
                if (!chartList) {
                  setChartList(true);
                } else {
                  setChartList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="stats-chart-outline"></ion-icon>
                </span>
                <p>Charts</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
          </div>
          {chartList && <ChartsItemList />}
          {/* ---------------------------------------------- */}
          <div className="div-3">
            <h3>Web Apps</h3>
            <div
              className="menu_item"
              onClick={() => {
                if (!appsList) {
                  setAppsList(true);
                } else {
                  setAppsList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="cube-outline"></ion-icon>
                </span>
                <p>Apps</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {appsList && <AppsList />}
            {/* ---------------------------------------------- */}
            <div
              className="menu_item"
              onClick={() => {
                if (!elementsList) {
                  setElementsList(true);
                } else {
                  setElementsList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="copy-outline"></ion-icon>
                </span>
                <p>Elements</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {elementsList && <ElementsItemList />}
            {/* ---------------------------------------------- */}
            <div
              className="menu_item"
              onClick={() => {
                if (!advanceList) {
                  setAdvanceList(true);
                } else {
                  setAdvanceList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="color-palette-outline"></ion-icon>
                </span>
                <p>Advance UI</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
          </div>
          {advanceList && <AdvanceItemList />}
          {/* ---------------------------------------------- */}
          <div className="div-4">
            <h3>Multi Levels</h3>
            <div
              className="menu_item"
              onClick={() => {
                if (!menuList) {
                  setMenuList(true);
                } else {
                  setMenuList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="file-tray-stacked-outline"></ion-icon>
                </span>
                <p>Menu-Levels</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
          </div>
          {menuList && <MenuItemList />}
          {/* ---------------------------------------------- */}
          <div className="div-5">
            <h3>Components</h3>
            <div
              className="menu_item"
              onClick={() => {
                if (!formsList) {
                  setFormsList(true);
                } else {
                  setFormsList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="document-text-outline"></ion-icon>
                </span>
                <p>Forms</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {formsList && <FormsItemsList />}
            {/* ---------------------------------------------- */}
            <div
              className="menu_item"
              onClick={() => {
                if (!tablesList) {
                  setTablesList(true);
                } else {
                  setTablesList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="tablet-landscape-outline"></ion-icon>
                </span>
                <p>Tables</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {tablesList && <TableItemsList />}
            {/* ---------------------------------------------- */}
            <div className="menu_item">
              <div className="menu_left">
                <span>
                  <ion-icon name="grid-outline"></ion-icon>
                </span>
                <p>Widgets</p>
              </div>
            </div>
            <div
              className="menu_item"
              onClick={() => {
                if (!mapsList) {
                  setMapsList(true);
                } else {
                  setMapsList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="map-outline"></ion-icon>
                </span>
                <p>Maps</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {mapsList && <MapsItemList />}
            {/* ---------------------------------------------- */}
          </div>
          <div className="div-6">
            <h3>Pages</h3>
            <div
              className="menu_item"
              onClick={() => {
                if (!pagesList) {
                  setPagesList(true);
                } else {
                  setPagesList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="book-outline"></ion-icon>
                </span>
                <p>Pages</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {pagesList && <PagesItemList />}
            {/* ---------------------------------------------- */}
            <div
              className="menu_item"
              onClick={() => {
                if (!utilitiesList) {
                  setUtilitiesList(true);
                } else {
                  setUtilitiesList(false);
                }
              }}
            >
              <div className="menu_left">
                <span>
                  <ion-icon name="aperture-outline"></ion-icon>
                </span>
                <p>Utilities</p>
              </div>
              <p>
                <ion-icon name="chevron-forward"></ion-icon>
              </p>
            </div>
            {utilitiesList && <UtilitiesItemList />}
            {/* ---------------------------------------------- */}
          </div>
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div
        className="smallSidebar"
        style={{ display: smallSidebar ? "none" : "block" }}
      >
        <div className="top_sidenabvar__container">
          <img src="src/assets/logo1.png" alt="logo" />
        </div>
        <div className="middle_sidenabvar__container">
          <div className="user_profile_div">
            <div className="profile_img_bg">
              <img src="src/assets/profile.jpg" alt="logo" />
            </div>
            <div className="active_div">
              <div className="active_status"></div>
            </div>
          </div>
        </div>
        <div className="bottom_sidenavbar__container">
          <div className="small_menu_item ">
            <ul>
              <li className="current_active">
                <ion-icon name="albums-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="happy-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="stats-chart-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="cube-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="copy-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="color-palette-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="file-tray-stacked-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="document-text-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="tablet-landscape-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="grid-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="map-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="book-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="aperture-outline"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenavbar;
