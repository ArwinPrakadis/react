import React, { Component } from 'react'

class refdem extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    handle=()=>
    {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.handle}>click</button>
            </div>
        )
    }
}
//this will be focussed
export default refdem
