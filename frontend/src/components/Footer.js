import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-4'>
            &copy; {currentYear} johnny&co.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
