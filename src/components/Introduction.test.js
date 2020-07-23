import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Introduction from './Introduction'

const mockDocument = {
    data: {
        title: [{text:
        "test"}],
        github_link:{
            url: "link"
        },
        linkedin_link:{
            url: "link"
        },
        arrow_text: [{type: "heading1", text:"test",spans:[]}]
    }
}

test('component renders' , async() => {
    const component = render(
        <Introduction document={mockDocument}></Introduction>
    )
})