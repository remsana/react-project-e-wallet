import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";

function Homepage({ userName }) {
  // console.log(userName.name.first)
  return (
    <div>
      <Header userName={userName}/>
      <Cards userName={userName} />
    </div>
  );
}

export default Homepage;
