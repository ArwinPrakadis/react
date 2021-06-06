import React, { Component } from 'react'

class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             login:true
        }
    }
    
    render() {
             // return this.state.login ? <div>hello</div>:<div>bye</div> ternary approach
            // return this.state.login && <div>welcome</div>  //execeuted only both are true 
              let mess
              
            
                if(this.state.login)
                {
                    mess='hello arwin'
                }
                else
                {
                    mess='welcome user not logged in'
                }
            return <div><h1>{mess}</h1></div>
        
    }
}

export default login
