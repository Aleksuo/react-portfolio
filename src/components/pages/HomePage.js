import React, { useState } from 'react'
import Section from '../Section'
import Introduction from '../Introduction'

import Prismic from 'prismic-javascript'
import { client } from '../../api.js'

function HomePage() {
  const [doc, setDocData] = useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'home_page')
      )
      if (response) {
        setDocData(response.results[0])
      }
    }
    fetchData()
  }, [])
  if (!doc)
    return null
  return (
    <Section title="Suoranta" id="Home">
      <Introduction document={doc}></Introduction>
    </Section>
  )
}

export default HomePage