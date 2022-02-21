import { useSelector, useDispatch } from "react-redux";
import {addCardNo, addFirstName,addLastName, addValidity,addCCV,addVendor} from "../redux/addcardpageSlice";

const CardDetails = () => {
  const dispatch = useDispatch();
  const {cardNo, firstName,lastName,validity,ccvNo,vendor} = useSelector((state) => state.addcard);


  const cardDetailsInputs = () => {
      let cardNoValue = document.querySelector("#cardNumber").value;
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

//   const nameFirst = () => {
//     let firstNameValue = document.querySelector("#firstNameInput").value;
//     console.log(firstNameValue);
//     dispatch(addFirstName(firstNameValue));
//   }

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
            <option disabled selected="true">--Select--</option>
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