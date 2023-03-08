import React from "react";
import "../Graph/graph.css";

const Graph = () => {
  return (
    <div className="graph_container">
      <div className="graph_heading">
        <h3>Order Status</h3>
        <p>
          Order Status and Tracking. Track your order from ship data to arrival.
          To begin, enter your order number.
        </p>
      </div>
      <div className="graph_img_div">
        <img src="./assets/graph.png" alt="flag" />
      </div>
    </div>
  );
};

export default Graph;
