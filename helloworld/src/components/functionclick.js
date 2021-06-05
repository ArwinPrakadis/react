import React from 'react'
//rfc function click
function functionclick() {
    function Clickhandler()
    {
       console.log("button clicked")
    }
    return (
        <div>
            <button onClick={Clickhandler}>funclick</button>
        </div>
    )
}
export default functionclick
