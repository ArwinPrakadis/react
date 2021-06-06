import React, { Component } from 'react'
import Input from './cc'
//chhild to do focus on parent cc.js
class pp extends Component {
    constructor(props) {
        super(props)
    
        this.reff=React.createRef()
    }
    handlecare=()=>{
        this.reff.current.focusinpu()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.reff}></Input>
                <button onClick={this.handlecare}>click</button>
            </div>
        )
    }
}

export default pp
