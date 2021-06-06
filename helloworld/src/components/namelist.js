import React, { Component } from 'react'
import passinglist from './passinglist'
import Passinglist from './passinglist'
{/*
class namelist extends Component {
    render() {
        var names=['this','is','list']
        var nameres=names.map(result=><h2>{result}</h2>)
        return (
            <div>
                {nameres}
            </div>
        )
    }
}
*/}

class namelist extends Component {
    render() {
        var list=[
           {
               
               'name':'a',
               'age':20
           },
           {
               
               'name':'b',
               'age':17
           }
        ]
       // var final=list.map(maping =><div>I am {maping.name} and age is {maping.age}</div>)
       var lm=list.map(person =><Passinglist person={person}/>)
        return (
            <div>
                {lm}
            </div>
        )
    }
}

export default namelist



