import React from 'react'
import { Component } from 'react'
class change extends Component
{
    constructor()
    {
        super()
        this.state={
            message:'welcome visitor'
        }
    }
    changeMessage()
    {
        this.setState({
            message:'thanku for subs'
        })
    }
    render()
        {
            return(
                <React.Fragment>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
                </React.Fragment>
                
            );
        
        } 
}
export default change