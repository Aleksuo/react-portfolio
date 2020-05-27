import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import IconRow from './IconRow'

test('component renders' ,() => {
    const component = render(
        <IconRow></IconRow>
    )
})
