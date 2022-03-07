import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

function Homepage({ userName }) {
 
  return (
    <div>
      <Header userName={userName} text ={"A Reliable Card Management System"}/>
      <Cards userName={userName} text=""/>
    </div>
  );
}

export default Homepage;
