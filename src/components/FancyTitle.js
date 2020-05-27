import React from 'react'

function FancyTitle(props){
    return(
      <span>
        <span className="accent-style">
        >
        </span>
        {props.children}_
        </span>)
}

export default FancyTitle