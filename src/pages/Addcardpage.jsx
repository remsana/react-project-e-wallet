import CardDetails from "../components/CardDetails"
import Header from "../components/Header"
const Addcardpage = (props) => {
    console.log(props.location.firstName)
    console.log(props.location.lastName)
    return (

        <div>
           
            <Header userName={props.userName} text="Please fill the following details to add a new card:"/>
            {/* render a component where one can fill in details */}
            <div id="cardDetails">
             {props.userName && <CardDetails firstname = {props.userName.name.first} lastname = {props.userName.name.last}/>}
            {/* Enter the number:<input type="number" />
            Enter your full name:<input type="text"/>
            Valid through:<input type="date" />
            CVV: <input type="number" /> */}
            </div>
        </div>
    )
}

export default Addcardpage;