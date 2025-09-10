import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";

const Cart = () => {
  return (
    <Container className='mt-4'>
        <Row>
            <Col>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quanity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <MdDelete className='text-danger'/>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default Cart