import React from 'react'
import "./join.css"


const join = () => {

  return (
    <div className='join' id="join-us">
    <div className='left-j'>
    <div>
        <span>  Ready To  </span>
        <span>  Level UP</span>
    </div>
    <div>
        <span>  YOURS BODY</span>
        <span>  WITH US ?</span>
    </div>
    </div>
    <div className='right-j'>
        <form  
        className="email-container"
        
        >
        <input type="email" name='user_email' placeholder='enter your email address'/>
        <button className="btn btn-j">Join Now</button>
        </form>
    </div>
    </div>
  )
}

export default join