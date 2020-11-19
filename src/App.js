import React from 'react';
import logo from './logo.svg';

import './App.css';
import Profile from "./profile/Profile.js";
import { render } from '@testing-library/react';
import Handlechange from './profile/Handlechange';
function App() {
  const handleName=fullName=>alert(fullName)
  return (
   <div style={{backgroundColor:"#cccccc"}}>

        {/* tried to make it so that INPUT text will be the new TEST1 and render it while collapsing the OLD one
              but miserably FAILED to do so  (i was the one that failed not the app) */}
        {/* <input type="text" name="dza"></input>
        <input type="button" value="test me" test1="but" onClick={Handlechange}>
        
        </input> */}
    
      <Profile fullName="Ezzine Wael" handleName={handleName}><img src={logo} height="100px" width="300px" alt="missing"/> </Profile>
      
             
   </div>
  );
}


export default App;
