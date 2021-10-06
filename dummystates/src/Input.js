import react, { useState } from "react";

const Input = () => {
  const pnHandler = (event) => {
    setpn(event.target.value);//to handle phone number input
    //console.log(setpn);
  };

  const dataHandler = (event) => {
    setoption(event.target.value);//to handle options
    //console.log(setoption);
  };

  const submitHandler = (event) => {
    alert("Your Entered Phone Number is:" + pn + " Data Pack:" + option);//for submit button
  };

  const phone = useState("");//for phone no.
  const pn = phone[0];
  const setpn = phone[1];//for radio input
  //console.log(pn);

  const Data = useState("");
  const option = Data[0];
  const setoption = Data[1];

  return (
    <>
      <label>Enter Your Mobile Number: </label>
      <input type="number" pattern="[0-9]{10}" onChange={pnHandler}></input>
      <p> Have Data Pack?</p>
      <input
        type="radio"
        id="yes"
        name="dataPack"
        value="YES"
        onChange={dataHandler}
      ></input>
      <label for="yes">Yes</label>
      <br />
      <input
        type="radio"
        id="no"
        name="dataPack"
        value="NO"
        onClick={dataHandler}
      ></input>
      <label htmlFor="no">No</label>
      <br />
      <br />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
      <br />
      <span>Entered Number: {pn}</span>
      <br />
      <span>Data Pack: {option}</span>
    </>
  );
};
export default Input;
