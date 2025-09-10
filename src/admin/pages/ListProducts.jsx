import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";

const ListProducts = () => {

  const {products} = useSelector((state) => state.products);

  return (
    <Container className='mt-4'>
       <Row>
        <Col>
            <h2>List Products</h2>
           
        </Col>
       </Row>
        <Row>
            <Col>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product photo</th>
          <th>Product name</th>
          <th>Product price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i)=>(
          <tr key={i}>
          <td>{i + 1}</td>
          <td>
            <Image src={product?.productPhoto ?? ''} alt={product.productName}  style={{width:'80px'}} />
          </td>
          <td>
            {product.productName}
          </td>
          <td>
            {product.productPrice}
          </td>
          <td>
            <FaRegEdit/>
          </td>
          <td>
            <MdDelete />
          </td>
        </tr>
        ))}
        
      </tbody>
    </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default ListProducts