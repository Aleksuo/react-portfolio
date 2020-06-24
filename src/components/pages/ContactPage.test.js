import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ContactPage from './ContactPage'

test('component renders' , async () => {
    const component = render(
        <ContactPage></ContactPage>
    )
})