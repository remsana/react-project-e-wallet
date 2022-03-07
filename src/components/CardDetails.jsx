import { useDispatch } from "react-redux";
import { addCardNo, addFirstName, addLastName, addMonth, addYear, addCCV, addVendor, newCard } from "../redux/homepageSlice";
import { Link } from "react-router-dom";
import { useState } from "react";



const CardDetails = ({ firstname, lastname }) => {

  
  const dispatch = useDispatch();
  const cardDetailsInputs = () => {

    let cardNoValue = document.querySelector("#cardNumber").value;
    console.log("cardValue:", cardNoValue);
    let firstNameValue = firstname;
    let lastNameValue = lastname;
    let monthValue = document.querySelector("#month").value;
    let yearValue = document.querySelector("#year").value;
    let ccvValue = document.querySelector("#ccv").value;
    let vendorValue = document.querySelector("#dropdown").value;

    dispatch(addCardNo(cardNoValue));
    dispatch(addFirstName(firstNameValue));
    dispatch(addLastName(lastNameValue));
    dispatch(addMonth(monthValue));
    dispatch(addYear(yearValue));
    dispatch(addCCV(ccvValue));
    dispatch(addVendor(vendorValue));
  }

  const [cardNoInput, setCardNoInput] = useState();
  const[monthInput, setMonthInput] = useState();
  const[yearInput, setYearInput] = useState();
  const [ccvInput, setCcvInput] = useState();
  return (
    <div >

      <div className="details">
      
        <div className="Container_addCard">
          <div className="Card_addCard">
            <div className="Container-2">
              <div className="CardFront-addCard">
                
                  <div className="Chip-addCard"></div>
                  <h3 className="CardNo-addCard">{cardNoInput}</h3>
                  <div className="Row-addCard">
                    <h6>VALID THRU</h6>
                  </div>
                  <div className="Row2-addCard">
                    {firstname &&
                      <p>
                        {firstname.toUpperCase()} {""}
                        {lastname.toUpperCase()}
                      </p>
                    }
                  <p>{monthInput}{"/"}{yearInput}</p>
                  </div>
                
              </div>
            </div>

            <div className="CardBack-addCard">
              <div className="Strip-addCard"></div>
              <div className="Row-addCard">
                <div className="Pattern-addCard"></div>
              <p>{ccvInput}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="InputContainer">
        <h6>CARD NUMBER:</h6> 
        <input
          type="tel"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          onChange={(e) => {setCardNoInput(e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()) }}
          maxLength="19"
          minLength="19"
        />
        <h6>CARD HOLDER NAME:</h6>
        <div className="firstNameContainer">
          {firstname && <p>{firstname.toUpperCase()} {lastname.toUpperCase()}</p>}
        </div>
        <h6>VALID THRU:</h6>
        <div>
          <select id="month" onChange={(e)=> {setMonthInput(e.target.value)}}>
            <option disabled>Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select id="year" onChange = {(e)=> {setYearInput(e.target.value)}}>
            <option value="22">2022</option>
            <option value="23">2023</option>
            <option value="24">2024</option>
            <option value="25">2025</option>
            <option value="26">2026</option>
            <option value="27">2027</option>
            <option value="28">2028</option>
            <option value="29">2029</option>
            <option value="30">2030</option>
            <option value="31">2031</option>
          </select>
        </div>
        <h6>CCV:</h6>
        <input
          type="tel"
          id="ccv"
          onChange={(e) => { setCcvInput(e.target.value = e.target.value.replace(/\D/g, "")) }}
          placeholder="---"
          maxLength="3" />
        <br />
        <select id="dropdown" >
          <option disabled>--Select--</option>
          <option value="Master Card" >Master Card</option>
          <option value="Visa">Visa</option>
          <option value="American Express">American Express</option>
        </select>
        </div>
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