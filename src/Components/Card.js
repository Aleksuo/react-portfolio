import React, { useState} from 'react'

function Card(props) {
    const background = useState(props.background)
    return (
      <div className="card" style={{ backgroundImage: "url(" + { background } + ")" }}>
        <div className="card-info"></div>
        <h1>Project title</h1>
        <div></div>
        <div>
          <i className="fas fa-code huge"></i>
          <i className="fas fa-external-link-alt huge"></i>
        </div>
      </div>
    )
  }

  export default Card