import React, { useState } from "react";

function Final(props) {
  const {code} = props

  const handleChange = (e) => {
    props.setFinCode(e.target.value)
    // console.log(props.finCode)
  }

  return (
    <>
      <div id="codes-container">
        <div className="curr-Text">Choose Final Currency</div>

        <div className="dropdown">
          {/* <img class="flag-img" src={props.img-src} alt="Country Flag"></img> */}
          <select id="conCode" value={props.finCode} onChange={handleChange}>
            {code.map((currency) => (
              <option key={currency} value={currency}> {currency} </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Final;
