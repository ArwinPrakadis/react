import React, { Component } from 'react'

class eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:'hello'
            
             
        }
    }
    handler()
    {
        this.setState({message:'bye'}) //wont work thats so bin binding is performed


    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*<button onClick={this.handler.bind(this)}>eventbind</button> 1st method*/}
                <button onClick={()=>this.handler()}>eventbind</button>{/*2nd*/}
            </div>
        )
    }
}

export default eventbind
