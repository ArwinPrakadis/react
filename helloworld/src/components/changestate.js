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
                <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
                </div>
                
            );
        
        } 
}
export default change