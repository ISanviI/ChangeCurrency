import React, { useState } from "react";

function Initial(props) {
  const {code} = props

  const handleChange = (e) => {
    props.setIniCode(e.target.value)
    // console.log(props.iniCode)
  }

  return (
    <>
      <div id="codes-container">
        <div className="curr-Text">Choose Initial Currency</div>

        <div className="dropdown">
          {/* <img class="flag-img" src={props.img-src} alt="Country Flag"></img> */}
          <select id="conCode" value={props.iniCode} onChange={handleChange}>
            {code.map((currency) => (
              <option key={currency} value={currency}> {currency} </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Initial;
