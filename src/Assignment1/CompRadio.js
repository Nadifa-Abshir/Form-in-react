// import react from "react";
import { useState } from "react";


function CompRadio(props){
    
    const[friend , setFriend] =useState();
    // const handleFriend= ()=>{
    //     setFriend(rtitle)
    // }
    return(
        <div className="radio">
             <label>Would you recomend freecodecomp to a friend</label><br></br>
              <input type="radio" name="friend" value="Definitly" onChange={e=> setFriend (e.target.value)}/>Definitly<br></br>
              <input type="radio" name="friend" value="may be" onChange={e=> setFriend (e.target.value)}/>may be<br></br>
              <input type="radio" name="friend" value="not sure" onChange={e=> setFriend (e.target.value)}/>not sure
              </div>
    )
}

export default CompRadio;