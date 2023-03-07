import React from "react";
import "../OverallStatus/overalstatus.css";

const OveralStatus = () => {
  return (
    <div className="overall_container">
      <div className="overall_col1">
        <p>Total Sales</p>
        <h3>$7,590</h3>
      </div>
      <div className="overall_col2">
        <p>Active Users</p>
        <h3>$5,468</h3>
      </div>
    </div>
  );
};

export default OveralStatus;
