import React, {Fragment} from 'react'
import ConditionalWrapper from './ConditionalWrapper'
import Tooltip from './Tooltip'

import '../styles/icon.scss'

function Icon(props) {
    const { icon, link, tooltip } = props
    let element =
        <ConditionalWrapper
            condition={tooltip}
            wrapper={children => <Tooltip text={tooltip}>{children}</Tooltip>}
        >
            <ConditionalWrapper
                condition={link}
                wrapper={children => <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>}>
                <i className={icon}></i>
            </ConditionalWrapper>
        </ConditionalWrapper>

    return (
        <Fragment>
            {element}
        </Fragment>
    )
}

export default Icon