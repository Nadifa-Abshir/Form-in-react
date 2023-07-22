import React, { useState } from "react";
import CompForm from "./CompForm";




function AllParents(){
    return <div className="parents">
<div className="form">
  <CompForm title="Name" place="Enter your Name"/>

  <CompForm title="Email" place="Enter your Email"/>

  <CompForm title="Age (option)" place="Enter your Age"/>
  <CompForm title="Whic option the best descripes your current rule" place="Select current rule"/>
  </div>
 

    </div>
}

export default AllParents;
