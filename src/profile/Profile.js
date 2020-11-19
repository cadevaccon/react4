import React from 'react'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile(props) {
     const {fullName="Ezzine Wael",bio="Not much to talk about",profession="still a Student",handleName} =props;
    return (
        <div>
              <div className="container">
                  <div className="row">
                      <div className="col-2">
                   {props.children}
                   </div>
                   </div>
               <div className="row">
                   <div className="col-5" style={{backgroundColor:"yellow"}}><br/>
              FullName :{fullName}<br/>
               Profession : {profession} <br/>
               Bio  {bio}<br/>
                
                


               TEST1 :{ props.test1 || "  test1 is MISSING"}
                </div>
                <div className="col-4" style={{backgroundColor:"red"}}>
                <span style={{color:"red" ,backgroundColor:"black"}} onClick={()=>handleName(`full name ${fullName}`)}>Click ME </span><br/>
                <span style={{color:"red" ,backgroundColor:"black"}} onClick={handlealert2}>Dont Click me </span><br/>
                </div>
                </div>

                </div>
        </div>
    )
}


function handlealert(x){

    return(
            
                        <>
                        {alert("")}
                        </>
                    
    )
}

function handlealert2(){

    return(
            
                        <>
                        {alert("dont Click me again")}
                        </>
                    
    )
}
Profile.defaultProps = {
    test1: ""
   };
   Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession:PropTypes.string

  };


export default Profile
