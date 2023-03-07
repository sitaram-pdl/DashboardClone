import React from "react";
import "../Sales/sales.css";
import SaleArrayList from "../../array/Dashboardbodylist/SalseArrayList";

const Sales = () => {
  return (
    <div className="sales_container">
      <div className="sales_heading">
        <h3>SALES ACTIVITY</h3>
        <p>
          Sales activities are the tactics that salespeople use to achieve their
          goals and objective
        </p>
      </div>
      <div className="sales_body">
        {SaleArrayList.map((dat) => {
          return (
            <>
              <div className="individual_sales">
                <div className="sales_profile">
                  <span>
                    <ion-icon name={dat.icon}></ion-icon>
                  </span>
                </div>
                <div className="sales_details">
                  <h3>{dat.title}</h3>
                  <p>{dat.value}</p>
                </div>
                <div className="active_time">
                  <small>{dat.status}</small>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sales;
