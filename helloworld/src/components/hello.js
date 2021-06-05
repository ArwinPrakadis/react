

//with and without JSX-8
//class is replaced by classname because of jsx
import React from 'react'
const hello = ()=>{
   // return(
    //    <div>
      //  <h1>const from hello</h1>
        //</div>
    //)
   /*Jsx*/return React.createElement("div",{id:'hello',className:'hello'},React.createElement("i",null,React.createElement("h1",null,'arwin')))
}
export default hello