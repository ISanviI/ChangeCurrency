import { useState, useEffect } from "react";
import "./index.css";
import CountryList from "./CountryList.js";
import Initial from "./Initial.js";
import Final from "./Final.js";

function App() {

  // const [a, setA] = useState(0)
  // useEffect(() => {
  //   setA(a+1)
  //   console.log(`value of a is ${a}`)
  // },[]) --> rendering loop

  const BaseURL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

  let codeArr = Object.keys(CountryList);

  const [amt, setAmt] = useState(1);
  const [finAmt, setFinAmt] = useState(83.28613196);

  const [iniCode, setIniCode] = useState("USD");
  const [finCode, setFinCode] = useState("INR");

  // Following code can't be used to change the value of an attribute that you want to append with updated one cause state hook will re-render the page very time it is appended, and it gives error to stop infinite re-rendering loop.

  // for (let code in countryList) {
  //   setIniCode(code)
  //   setFinCode(code)
  //   console.log(iniCode, finCode)
  // }

  useEffect(() => {
    fetch(BaseURL)
      .then((res) => res.json())
      .then((data) => 
        console.log(data)
        // console.log(Object.keys(Object.keys(data)))
      );
    // Arrow function with curly brackets doesn't work. Remove the brackets only.

    // let result = await fetch(BaseURL);
    // let data = await result.json();
    // console.log(data);  ---> Error - Destroy is not a function!
  }, []);

  useEffect(() => {
    let lower_inicode = `${iniCode}`.toString().toLowerCase();
    let lower_fincode = `${finCode}`.toString().toLowerCase();
    let newURL =
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lower_inicode}.json`
    
    console.log(newURL, lower_fincode)

    fetch(newURL)
      .then((res) => res.json())
      // .then((data) => JSON.parse(data))
      .then((data) => data[`${lower_inicode}`][`${lower_fincode}`])
      .then((value) => {
        console.log(amt)
        console.log(value)
        console.log(amt*value)
        setFinAmt(amt*value)
      });
  }, [amt, iniCode, finCode]);

  return (
    <>
      <h1> Here is the Currency Converter! </h1>

      <form id="form">
        <label htmlFor="value">Enter a value</label>
        <br></br>
        <input
          type="number"
          id="amt"
          placeholder="Number"
          name="amt"
          value={amt}
          onChange={(e) => {
            setAmt(e.target.value);
          }}
        ></input>

        <div id="currFlex">
          <Initial
            iniCode={iniCode}
            setIniCode={setIniCode}
            id="iniCurr"
            code={codeArr}
          />

          <Final
            finCode={finCode}
            setFinCode={setFinCode}
            id="finCurr"
            code={codeArr}
          />
        </div>

        <div id="finAmt">{finAmt}</div>
      </form>
    </>
  );
}

export default App;
