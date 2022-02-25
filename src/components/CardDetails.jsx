import { useSelector, useDispatch } from "react-redux";
import {addCardNo, addFirstName,addLastName, addValidity,addCCV,addVendor,newCard} from "../redux/homepageSlice";
import {Link} from "react-router-dom";

const CardDetails = ({firstname, lastname}) => {

  const dispatch = useDispatch();

  const {cardNo,firstName,lastName,validity,ccvNo,vendor} = useSelector((state)=> state.homepage)
  
  
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

// let cardInput = document.querySelector("#cardNumber");
// cardInput.onkeyup = function () {
//   document.querySelector("#printCardNo").innerHTML = cardInput.value;
// };
    return(
        <div >
           
            <div className="details">
            <div className="Card">
            {/* <li id="printCardNo"></li> */}
                <ul>
                 
                <li>{cardNo}</li>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{validity}</li>
                <li>{ccvNo}</li>
                <li>{vendor}</li>

                </ul>

</div>



     
            CardNumber: <input type="tel" id="cardNumber" />
            Firstname:<input type="text" id="firstNameInput" disabled/>
            Lastname:<input type="text" id="lastNameInput" disabled/>
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
            <Link to = "/">
            {/* <button onClick= {() => {dispatch(newCard())}}>Add card</button> */}
            <button onClick= {()=> {dispatch(newCard(cardDetailsInputs()))}}>Add card</button>
            </Link>
            </div>
        </div>
    )
}

export default CardDetails;