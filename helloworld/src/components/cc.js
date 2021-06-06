import React, { Component } from 'react'
//cc.js gets focus from child pp.js
class cc extends Component {
    constructor(props) {
        super(props)
    
        this.crref=React.createRef()
    }
    focusinpu()
    {
        this.crref.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.crref}/>
            </div>
        )
    }
}

export default cc
