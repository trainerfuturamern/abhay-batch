import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center min-vh-100'>
            <Row >
                <Col md={8} lg={6} className='w-100'>
                    <Card className='text-center border-0 shadow-lg p-4'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title className='display-1 text-danger fw-bold'>403</Card.Title>
                            <Card.Text>
                                You don't have permission to visit this page
                            </Card.Text>
                            <Button variant="primary" as={Link} to={'/'}>Go Home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Unauthorized