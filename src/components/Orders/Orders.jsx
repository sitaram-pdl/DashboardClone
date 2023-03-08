import React from "react";
import "../Orders/order.css";

const Orders = () => {
  return (
    <div className="order_container">
      <div className="order_heading">
        <h3>RECENT ORDERS</h3>
        <p>
          An order is an investor's instructions to a broker or brokerage firm
          to purchase or sell
        </p>
      </div>
      <div className="order_body">
        <div className="order_graph_img">
          <img src="./assets/order.png" alt="flag" />
        </div>
        <div className="order_graph_analytic">
          <div className="order_graph_left">
            <div className="order_deliver">
              <div className="deliver_color"></div>
              <p>Delivered</p>
            </div>
            <h3>5238</h3>
            <p>Last 6 months</p>
          </div>
          <div className="order_graph_right">
            <div className="order_deliver">
              <div className="deliver_color"></div>
              <p>Cancelled</p>
            </div>
            <h3>5238</h3>
            <p>Last 6 months</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
