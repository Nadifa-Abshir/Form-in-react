
import { useState } from "react";

function CompCheack(props){
    const[project , setProject] = useState()
    return(
        <div className="check"> 
         <input type="checkbox" name="project" value="front-end" onChange={e=> setProject (e.target.value)}/>{props.chTitle}
         </div>
         
    )

}

export default CompCheack;