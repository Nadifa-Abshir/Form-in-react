// import react from "react";


function CompForm(props){

    return (

        <div>

        <form>
            <label>{props.title}</label><br></br>
            <input type="text"title="Name"  placeholder={props.place} style={{width: "90%"  , height: "17px",paddingLeft: "20px" }}/>
      </form>
        </div>
    )
        
    
}

export default CompForm;