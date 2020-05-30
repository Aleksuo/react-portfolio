import React from 'react'

function CardInfo(props){
    const {type, description, languages, technologies} = props.project
    return(
      <div className="card-info">
          <div></div>
          <div></div>
          <div className="card-info-element">
            <h3>Type:</h3>
            {type}
          </div>
          <div className="card-info-element">
            <h3>Description:</h3>
            {description}
          </div>
          <div className="card-info-element">
            <h3>Languages:</h3>
            {languages}
          </div>
          <div className="card-info-element">
          <h3>Technologies:</h3>
          {technologies}
          </div>
        </div>
    )
  }

  export default CardInfo