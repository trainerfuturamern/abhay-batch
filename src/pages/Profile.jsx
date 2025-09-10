import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Profile = () => {

    // let count = 0;
    const [count, setCount] = useState(10);   //state 

    const handleIncrement = ()=>{
        setCount(count + 1); // count = count + 1s
    }
    const handleDecrement = ()=>{
        setCount(count - 1);
    }

    
    console.log("count-------------->", count);
    

  return (
    <Container>
        <Row>
            <Col>
                <h4 className='text-center mt-2'>
                    Count:{count}
                </h4>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex gap-2 my-3 justify-content-center'>
                <Button onClick={handleIncrement}>+</Button>
                 <Button disabled={count <= 0 } onClick={handleDecrement}>-</Button>
            </Col>
        </Row>
        
        

    </Container>
  )
}

export default Profile