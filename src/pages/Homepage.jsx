import React from "react";
import Cards from "../components/Cards";

function Homepage({userName}) {
  // console.log(userName.name.first)
  return (
    <div>     
       {/* {userName && (
        <h1>
          Welcome {userName.name.first} {userName.name.last} !
        </h1>
      )}    */}
      <h1>Welcome to RC e-Wallet</h1>
      <h4>A <strong className="strong">R</strong>eliable <strong className="strong">C</strong>ard Management system</h4>
       <Cards userName={userName}/> 
    </div>
  );
}

export default Homepage;
