const Addcardpage = () => {
    return (
        <div>
            <h2>Fill the following details to add a new card:</h2>
            {/* render a component where one can fill in details */}
            <div id="cardDetails">
            Enter the number:<input type="number" />
            Enter your full name:<input type="text"/>
            Valid through:<input type="date" />
            CVV: <input type="number" />
            </div>
        </div>
    )
}

export default Addcardpage;