import React, { Component } from 'react'
import Childcom from './childcom'
class parentcom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:'parent'
             
        }
        this.greet = this.greet.bind(this)
    }
    greet(child)
    {
        alert(`hello ${this.state.parentname} from ${child}`)
    }
    
    render() {
        return (
            <div>
                <Childcom greet={this.greet}></Childcom>
            </div>
        )
    }
}

export default parentcom
