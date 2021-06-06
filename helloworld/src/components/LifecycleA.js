import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('constr')
    }
    static getDerivedStaticFromProps(props,state)
    {
        console.log('getderviedstaticfromprops')
        return null
    }
    componentDidMount()
    {
        console.log('componentdidmount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                lifecycle
            </div>
        )
    }
}
export default LifecycleA
