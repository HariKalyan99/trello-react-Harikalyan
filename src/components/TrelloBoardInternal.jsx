import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TrelloNavigation from './TrelloNavigation'

const TrelloBoardInternal = () => {
  return (

    <Container fluid className="min-vh-100 my-5">
      <TrelloNavigation />
<Link to={"/board"} className="text-decoration-none">
        <h1>
            go back
        </h1>
    </Link>
    </Container>
    
  )
}

export default TrelloBoardInternal