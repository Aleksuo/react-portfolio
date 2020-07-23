import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AboutPage from  './AboutPage'

test('component renders' , async () => {
    const component = render(
        <AboutPage></AboutPage>
    )
})