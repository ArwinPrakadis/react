import React, { Component } from 'react'
//rconst
//rce
class counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
             
        }
    }
    increment()
    {
       this.setState
       ({
           count:this.state.count+1
       },()=>{console.log(this.state.count)})//executed after count increment is performed
    }
    previous()
    {
        this.setState
       ({
           count:this.state.count-1
       },()=>{console.log(this.state.count)})
    }
    
    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.increment()}>add</button>
                <button onClick={()=>this.previous()}>sub</button>
            </div>
        )
    }
}

export default counter
