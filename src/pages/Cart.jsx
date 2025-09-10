import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../redux/cartSlice';

const Cart = () => {

  const { cartItems } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveCartItem = (index) => {
    dispatch(removeCartItem(index));
  }

  return (
    <Container className='mt-4'>
      <Row>
        <Col>
          {cartItems.length > 0 ? (
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
              {cartItems.map((cartItem, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {cartItem.productName}
                  </td>
                  <td>
                    {cartItem.quantity}
                  </td>
                  <td>
                    <MdDelete style={{ cursor: 'pointer' }} onClick={() => handleRemoveCartItem(i)} className='text-danger' />
                  </td>
                </tr>
              ))}



            </tbody>
          </Table>
          ) : (
            <h4 className='text-center'>No items found!</h4>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Cart