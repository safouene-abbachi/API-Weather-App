import React from "react";

function Weather(props) {
  const {
    city,

    temp_min,
    temp_max,
    description,
    temp_celsius,
    icon,
  } = props;
  return (
    <div className="container text-light">
      <div className="cards pt-4">
        <h1>{city}</h1>
        <h5 className="py-4">
          <i className={`wi ${icon} display-1`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{temp_celsius}&deg;</h1>
        ) : null}
        {minmaxtemp(temp_min, temp_max)}
        <h4 className="py-3">{description}</h4>
      </div>
    </div>
  );
  function minmaxtemp(min, max) {
    if (min && max) {
      return (
        <h3>
          <span className="px-4">{min}&deg;</span>
          <span className="px-4">{max}&deg;</span>
        </h3>
      );
    }
  }
}
export default Weather;
