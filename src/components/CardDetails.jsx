import { useSelector, useDispatch } from "react-redux";
import {addCardNo, addFirstName,addLastName, addValidity,addCCV,addVendor} from "../redux/homepageSlice";

const CardDetails = () => {
  const dispatch = useDispatch();
  
  const {cardNo, firstName,lastName,validity,ccvNo,vendor} = useSelector((state) => state.homepage);

  
  const cardDetailsInputs = () => {
     
      let cardNoValue = document.querySelector("#cardNumber").value;
      console.log(cardNoValue);
    console.log(typeof(cardNoValue));
      let firstNameValue = document.querySelector("#firstNameInput").value;
      let lastNameValue = document.querySelector("#lastNameInput").value;
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
// console.log(cardDetailsInputs);
//   let addCardInputs = {
//       cardNumber:document.querySelector("#cardNumber").value,
//       personFirstName:document.querySelector("#firstNameInput").value,
//       personLastName:document.querySelector("#lastNameInput").value,
//       cardvalidity:document.querySelector("#expiryDate").value,
//       ccvCard:document.querySelector("#ccv").value,
//       vendorCard:document.querySelector("#dropdown").value
//   }
//   console.log(addCardInputs);
  

    return(
        <div >
           
            <div className="details">
            <div className="Card">
                <ul>

                <li>{cardNo}</li>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{validity}</li>
                <li>{ccvNo}</li>
                <li>{vendor}</li>

                </ul>

</div>
            CardNumber: <input type="tel" id="cardNumber"/>
            Firstname:<input type="text" id="firstNameInput"/>
            Lastname:<input type="text" id="lastNameInput"/>
            Valid thru: <input type="date" id="expiryDate"/>
            CCV:<input type="tel" id="ccv"/>
            <br/>
            <select id="dropdown">
            <option disabled>--Select--</option>
            <option value="Master Card">Master Card</option>
            <option value="Visa">Visa</option>
            <option value="American Express">American Express</option>
          </select>
            <br/>
            <button onClick= {cardDetailsInputs}>Add card</button>
            </div>
        </div>
    )
}

export default CardDetails;