import React from "react";
import "../Country/country.css";
import CountryArrayList from "../../array/Dashboardbodylist/CountryArrayList";

const Countries = () => {
  return (
    <div className="country_container">
      <div className="country_heading">
        <h3>YOUR TOP COUNTRIES</h3>
        <p> Sales performance revenue based by country</p>
      </div>
      <div className="country_body">
        {CountryArrayList.map((dat) => {
          return (
            <>
              <div className="single_country" key={dat.id}>
                <p>{dat.country}</p>
                <h3>{dat.value}</h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
