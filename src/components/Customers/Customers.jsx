import React from "react";
import "../Customers/customer.css";
import CustomerArrayList from "../../array/Dashboardbodylist/CustomerArrayList";

const Customers = () => {
  return (
    <div className="customer_container">
      <div className="customer_heading">
        <h3>RECENT CUSTOMERS</h3>
        <p>
          A customer is an individual or business that purchases the goods
          service has evolved to include real-time
        </p>
      </div>
      <div className="customer_body">
        {CustomerArrayList.map((dat) => {
          return (
            <>
              <div className="individual_customer">
                <div className="customer_profile">
                  <img src={dat.image} alt="logo" />
                </div>
                <div className="customer_details">
                  <h3>{dat.name}</h3>
                  <h4>User ID: #{dat.userId}</h4>
                  <p>{dat.status}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
