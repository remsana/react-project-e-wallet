import CardDetails from "../components/CardDetails"
import Header from "../components/Header"
const Addcardpage = (props) => {
    return (
        <div>
            <Header userName={props.userName} text="Please fill the following details to add a new card:"/>
            {/* render a component where one can fill in details */}
            <div id="cardDetails">
             {props.userName && <CardDetails firstname = {props.userName.name.first} lastname = {props.userName.name.last}/>}
            </div>
        </div>
    )
}

export default Addcardpage;