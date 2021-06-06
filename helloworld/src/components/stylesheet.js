import React from 'react'
import './mystyles.css'
//{primary} is let
function stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} bigger`}>
            stylesheet
            </h1>
        </div>
    )
}
export default stylesheet
