import React, { useState } from 'react'
import Section from '../Section'
import Card from '../Card'
import Prismic from 'prismic-javascript'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { client } from '../../api'



function ProjectsPage(props) {
  const [doc, setDocData] = useState(null)
  const { display } = props

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'project')
      )
      if (response) {
        setDocData(response.results)

      }
    }
    fetchData()
  }, [])
  if (!doc)
    return "Loading..."
  return (
    <Section title="Projects" id="Projects">
      <div className="item-carousel">
        <Carousel dots slidesPerPage={display} infinite  draggable={false} arrowLeft={<i className="fas fa-chevron-left huge"></i>} arrowRight={<i className="fas fa-chevron-right huge"></i>} addArrowClickHandler>
          {doc.map(project => <Card project={project.data} key={project.id} ></Card>)}
        </Carousel>
      </div>

    </Section>
  )
}

export default ProjectsPage