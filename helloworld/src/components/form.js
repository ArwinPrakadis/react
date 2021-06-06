import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'',
             comment:'',
             value:''
        }
    }
    handlename=event=>{this.setState(
        {
            message:event.target.value
        }
        
    )}
    handlecomment=event=>{this.setState
    (
        {
            comment:event.target.value
        }
    )}
    handlevalue=event=>{
        this.setState(
            {
                value:event.target.value
            }
        )
    }
    handlesub=event=>{
        
            alert(`${this.state.message} ${this.state.comment} ${this.state.value}` ) 
            event.preventDefault()
       
    }
    changeMessage()
    {
        this.setState({message:this.state.message})
    }
    
    
    render() {
        return (
            
            <div>
                <form onSubmit={this.handlesub}>
            <h1>Name</h1>
            <input type='text' value={this.state.message} onChange={this.handlename}></input>
            <h1>textarea</h1>
            <textarea value={this.state.comment} onChange={this.handlecomment}></textarea>
            <h1>select</h1>
            <select value={this.state.value} onChange={this.handlevalue}>

                <option value='react'>React</option>
                <option value='angular'>Angular</option>

            </select>
            <h2>submit now</h2>
            

            <h1>{this.state.message}</h1>
                <button>submit</button>
            </form>
            </div>
        )
    }
}

export default form
