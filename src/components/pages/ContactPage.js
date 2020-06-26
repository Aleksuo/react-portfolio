import React, { useState } from 'react'
import Section from '../Section'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { linkResolver, client } from '../../api.js'

function ContactContainer(props) {
  const { document } = props
  return (
      <div className="circle-container">
        <RichText render={document.data.title} linkResolver={linkResolver} />
        <RichText render={document.data.body_content} linkResolver={linkResolver} />
      </div>
  )
}

function ContactPage() {
  const [doc, setDocData] = useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'contact_page')
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
    <Section title="Contact" id="Contact">
      <div className="item-main">
        <ContactContainer document={doc}></ContactContainer>
      </div>
    </Section>
  )
}

export default ContactPage