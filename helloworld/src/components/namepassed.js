import React from 'react'
//this is getting the object from the call and replacing with props.object name
const namepasse = (props)=>
{
   console.log(props)
    
    return(

        <div>
            <h1>Your fname {props.name} lname {props.lname}</h1>
            
            
            
        </div>
    )
}

export default namepasse