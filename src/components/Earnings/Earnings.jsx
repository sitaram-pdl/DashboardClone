import React from "react";
import "../Earnings/earnings.css";
import EarningArrayList from "../../array/Dashboardbodylist/EarningArrayList";

const Earnings = () => {
  return (
    <div className="earning_container">
      <div className="earning_heading">
        <h3>YOUR MOST RECENT EARNINGS</h3>
        <p>This is your most recent earnings for today's date.</p>
      </div>
      <div className="earning_body">
        <table>
          <tr>
            <th>DATE</th>
            <th>SALES COUNT</th>
            <th>EARNINGS</th>
            <th>TAX WITHELD</th>
          </tr>
          {EarningArrayList.map((dat) => {
            return (
              <>
                <tr>
                  <td>{dat.date}</td>
                  <td className="bold">{dat.count}</td>
                  <td className="bold">${dat.earning}</td>
                  <td className="bold">-${dat.tax}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Earnings;
