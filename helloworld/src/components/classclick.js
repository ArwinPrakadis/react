import React, { Component } from 'react'
//rce class component
class classclick extends Component {
    clicked()
    {
        console.log('class button clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>class click</button>
            </div>
        )
    }
}

export default classclick
