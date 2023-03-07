import React from "react";
import "../Dashboard/dashboard.css";
import Rightdashboardheading from "../../array/Dashboardheadinglist/Rightdashboardlist";
import Cardvalue from "../../array/Dashboardheadinglist/Cardvalue";
import CustomerRatings from "../../array/Dashboardheadinglist/CustomerRatings";
import Graph from "../Graph/Graph";
import WorldMap from "../Map/WorldMap";
import Customers from "../Customers/Customers";
import Sales from "../Sales/Sales";
import Orders from "../Orders/Orders";
import OveralStatus from "../OverallStatus/OverallStatus";
import Countries from "../Country/Countries";
import Earnings from "../Earnings/Earnings";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_heading">
        <div className="dashboard_heading__left">
          <h3>Hi, welcome back!</h3>
          <p>Sales monitoring dashboard template.</p>
        </div>
        <div className="dashboard_heading__right">
          <div className="dashboard_ratings">
            {CustomerRatings.map((dat) => {
              return (
                <>
                  <div className="title_text">
                    <h3>{dat.title}</h3>
                  </div>
                  <div className="Rating_value">
                    <div className="left_rating">
                      <span className="rated">
                        <ion-icon name={dat.icon}></ion-icon>
                      </span>
                      <span className="rated">
                        <ion-icon name={dat.icon}></ion-icon>
                      </span>
                      <span className="rated">
                        <ion-icon name={dat.icon}></ion-icon>
                      </span>
                      <span className="rated">
                        <ion-icon name={dat.icon}></ion-icon>
                      </span>
                      <span>
                        <ion-icon name={dat.icon}></ion-icon>
                      </span>
                    </div>
                    <div className="right_rating">
                      <p>{dat.value}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {Rightdashboardheading.map((dat) => {
            return (
              <>
                <div className="card_item" key={dat.id}>
                  <h3>{dat.title}</h3>
                  <h2>{dat.value}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="dashboard_card__div">
        {Cardvalue.map((dat) => {
          return (
            <>
              <div className="single_card" key={dat.id}>
                <div className="single_card-_left">
                  <h3>{dat.title}</h3>
                  <h1>${dat.Value}</h1>
                  <p>{dat.text}</p>
                </div>
                <div className="single_card-_right">
                  <ion-icon name={dat.icon}></ion-icon>
                  <h3>{dat.increment}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="graph_map__div">
        <Graph />
        <WorldMap />
      </div>
      <div className="third_div">
        <div className="first_col">
          <Customers />
        </div>
        <div className="second_col">
          <Sales />
        </div>
        <div className="third_col">
          <Orders />
          <OveralStatus />
        </div>
      </div>
      <div className="fourth_div">
        <Countries />
        <Earnings />
      </div>
    </div>
  );
};

export default Dashboard;
