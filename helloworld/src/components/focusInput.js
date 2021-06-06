import React, { Component } from 'react'
//input and focusinput
import Input from './input'
export class focusinput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
    }

    handlefocus=()=>{
        this.componentRef.current.focusinput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.handlefocus}>Focus Input</button>
            </div>
        )
    }
}

export default focusinput
