import {useDispatch } from "react-redux";
import {addCardNo, addFirstName,addLastName, addValidity,addCCV,addVendor,newCard} from "../redux/homepageSlice";
import {Link} from "react-router-dom";
import { useState } from "react";


const CardDetails = ({firstname, lastname}) => {

  const dispatch = useDispatch();

  // const {cardNo,firstName,lastName,validity,ccvNo,vendor} = useSelector((state)=> state.homepage)
  
  
  const cardDetailsInputs = () => {
     
      let cardNoValue = document.querySelector("#cardNumber").value;
      console.log("cardValue:", cardNoValue);
      // let firstNameValue = document.querySelector("#firstNameInput").value;
      let firstNameValue = firstname;
      let lastNameValue = lastname;
      let expiryDateValue = document.querySelector("#expiryDate").value;
      let ccvValue = document.querySelector("#ccv").value;
      let vendorValue = document.querySelector("#dropdown").value;
 
    dispatch(addCardNo(cardNoValue));
    dispatch(addFirstName(firstNameValue));
    dispatch(addLastName(lastNameValue));
    dispatch(addValidity(expiryDateValue));
    dispatch(addCCV(ccvValue));
    dispatch(addVendor(vendorValue));
  }
   
  // cardDetailsInputs();
const[cardNoInput, setCardNoInput] = useState();
const[validityInput, setValidityInput] = useState();
const[ccvInput,setCcvInput] = useState();

    return(
        <div >
           
            <div className="details">
            <div className="Card">
            <p>{cardNoInput}</p>
            {firstname && <p>

{firstname.toUpperCase()} {lastname.toUpperCase()}

</p>}
            <p>{validityInput}</p>
            <p>{ccvInput}</p>
           
                {/* <ul>
                 
                <li>{cardNo}</li>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{validity}</li>
                <li>{ccvNo}</li>
                <li>{vendor}</li>

                </ul> */}

</div>



     
            CardNumber: <input type="tel" id="cardNumber" onChange={(e)=>{setCardNoInput(e.target.value)}}/>
            <div className="firstNameContainer">
            {firstname && <p>{firstname.toUpperCase()} {lastname.toUpperCase()}</p>}
            </div>
            {/* Firstname:<input type="text" id="firstNameInput" disabled/>
            Lastname:<input type="text" id="lastNameInput" disabled/> */}
            Valid thru: <input type="date" id="expiryDate" onChange={(e) =>{setValidityInput(e.target.value)}}/>
            CCV:<input type="tel" id="ccv" onChange={(e) =>{setCcvInput(e.target.value)}}/>
            <br/>
            <select id="dropdown" >
            <option disabled>--Select--</option>
            <option value="Master Card" >Master Card</option>
            <option value="Visa">Visa</option>
            <option value="American Express">American Express</option>
          </select>
            <br/>
            <Link to = "/">
            {/* <button onClick= {() => {dispatch(newCard())}}>Add card</button> */}
            <button onClick= {()=> {dispatch(newCard(cardDetailsInputs()))}}>Add card</button>
            </Link>
            </div>
        </div>
    )
}

export default CardDetails;