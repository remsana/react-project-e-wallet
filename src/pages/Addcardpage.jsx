import CardDetails from "../components/CardDetails"
const Addcardpage = (props) => {
    console.log(props.location.firstName)
    console.log(props.location.lastName)
    return (
        <div>
            <h2>Fill the following details to add a new card:</h2>
            {/* render a component where one can fill in details */}
            <div id="cardDetails">
                <CardDetails/>
            {/* Enter the number:<input type="number" />
            Enter your full name:<input type="text"/>
            Valid through:<input type="date" />
            CVV: <input type="number" /> */}
            </div>
        </div>
    )
}

export default Addcardpage;