import React from 'react'
import {RichText } from 'prismic-reactjs'

function CardInfo(props){
    const {type, description, languages, technologies} = props.project
    console.log(type)
    return(
      <div className="card-info">
          <div></div>
          <div></div>
          <div className="card-info-element">
            <h3>Type:</h3>
            {RichText.asText(type)}
          </div>
          <div className="card-info-element">
            <h3>Description:</h3>
            {RichText.asText(description)}
          </div>
          <div className="card-info-element">
            <h3>Languages:</h3>
            {RichText.asText(languages)}
          </div>
          <div className="card-info-element">
          <h3>Technologies:</h3>
          {RichText.asText(technologies)}
          </div>
        </div>
    )
  }

  export default CardInfo