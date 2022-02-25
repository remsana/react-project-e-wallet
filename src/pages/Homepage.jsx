import React from "react";
import Cards from "../components/Cards";

function Homepage({userName}) {
  // console.log(userName.name.first)
  return (
    <div>        
       <Cards userName={userName}/> 
    </div>
  );
}

export default Homepage;
