import React from 'react'
import '../styles/tooltip.scss'

function Tooltip(props) {
    const { text, children } = props
    return (
        <div className="tooltip">
            <span className="tooltiptext">{text}</span>
            {children}
        </div>
    )
}

export default Tooltip