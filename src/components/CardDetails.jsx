import { useDispatch } from "react-redux";
import { addCardNo, addFirstName, addLastName, addValidity, addCCV, addVendor, newCard } from "../redux/homepageSlice";
import { Link } from "react-router-dom";
import { useState } from "react";


const CardDetails = ({ firstname, lastname }) => {

  const dispatch = useDispatch();
  const cardDetailsInputs = () => {

    let cardNoValue = document.querySelector("#cardNumber").value;
    console.log("cardValue:", cardNoValue);
    // let firstNameValue = document.querySelector("#firstNameInput").value;
    let firstNameValue = firstname;
    let lastNameValue = lastname;
    // let monthValue = document.querySelector("#month").value;
    // console.log("month:", monthValue);
    // let yearValue = document.querySelector("#year").value;
    // console.log("year:", yearValue);
    let expiryDateValue = document.querySelector("#expiryDate").value;
    let ccvValue = document.querySelector("#ccv").value;
    let vendorValue = document.querySelector("#dropdown").value;

    dispatch(addCardNo(cardNoValue));
    dispatch(addFirstName(firstNameValue));
    dispatch(addLastName(lastNameValue));
    // dispatch(addValidity(monthValue, yearValue));
    dispatch(addValidity(expiryDateValue));
    dispatch(addCCV(ccvValue));
    dispatch(addVendor(vendorValue));
  }

  const [cardNoInput, setCardNoInput] = useState();
  const [validityInput, setValidityInput] = useState();
  const [ccvInput, setCcvInput] = useState();
  // let regex = "^[0-9]{3, 4}$";
  return (
    <div >

      <div className="details">
        <div className="Container_addCard">
          <div className="Card_addCard">
            <div className="Container-2">
              <div className="CardFront-addCard">
                <div>
                  <div className="Chip-addCard"></div>
                  <h3 className="CardNo-addCard">{cardNoInput}</h3>
                  <div className="Row-addCard">
                    <h6>CARD HOLDER</h6>
                    <h6>VALID THRU</h6>
                  </div>

                  {firstname &&
                    <p className="Name-addCard">
                      {firstname.toUpperCase()} {""}
                      {lastname.toUpperCase()}
                    </p>
                  }
                </div>
              </div>
              <p>{validityInput}</p>

            </div>

            <div className="CardBack-addCard">
              <p>{ccvInput}</p>
            </div>
          </div>
        </div>
        CardNumber: <input
          aria-required
          type="tel"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={(e) => { setCardNoInput(e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()) }}
          maxLength="19"
        />
        <div className="firstNameContainer">
          {firstname && <p>{firstname.toUpperCase()} {lastname.toUpperCase()}</p>}
        </div>
        {/* <div>
          <select id="month">
            <option disabled>Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select id="year">
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
          </select>
        </div> */}
        Valid thru: <input
          type="month"
          id="expiryDate"
          placeholder="MM/YY"
          onChange={(e) => { setValidityInput(e.target.value) }}
        />
        CCV:<input
          type="tel"
          id="ccv"
          onChange={(e) => { setCcvInput(e.target.value) }}
          placeholder="---"
          maxLength="3" />
        <br />
        <select id="dropdown" >
          <option disabled>--Select--</option>
          <option value="Master Card" >Master Card</option>
          <option value="Visa">Visa</option>
          <option value="American Express">American Express</option>
        </select>
        <br />
        <Link to="/">
          {/* <button onClick= {() => {dispatch(newCard())}}>Add card</button> */}
          <button onClick={() => { dispatch(newCard(cardDetailsInputs())) }}>Add card</button>
        </Link>
      </div>
    </div>
  )
}

export default CardDetails;