import React from 'react'

function childcom(prompt) {
    return (
        <div>
            <button onClick={()=>prompt.greet('childS')}>greet parent</button>
        </div>
    )
}
export default childcom
