import React from "react";
import { createRoot } from "react-dom/client";

import CompForm from "./Assignment1/CompForm";
import CompRadio from "./Assignment1/CompRadio";
import CheckAllparents from "./Assignment1/CheckAllparents";
import Title from "./Assignment1/Title";
import CompButton from "./Assignment1/CompButton";
import AllParents from "./Assignment1/AllParents";


const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <div className="AllParent">

  <AllParents/>
  <CompRadio/>
  <CompForm className="option " title="What is your favorite feature freecodecamp " place="sellect on option" />
 <Title/>
 <CheckAllparents/>
 <CompButton/>

  </div>






</div>
)
