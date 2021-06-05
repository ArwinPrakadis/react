import React from 'react'
//this is getting the object from the call and replacing with props.object name
const nam = ({fname})=>
{
   
    console.log(fname)
    return(

        <div>
            
            <h1>Your fname {fname} </h1>
            
            
            
        </div>
    )
        
    
}
//in class component
//inorder to remove
//const{name}=this.props

export default nam