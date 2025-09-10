import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
 import { toast  } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const {userLogin}  = useContext(AuthContext);

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email:'',
    password:''
  })

  const handleChange = (e)=>{
    setLoginInfo((prev) => {

      const newInfo = {...prev};

      newInfo[e.target.name] = e.target.value;

      return newInfo;
    })
  }  

  const handleLogin = (e)=>{

    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find((user) => user.email === loginInfo.email);

    if(!user){
      
      toast.error("Invalid credentials");
      
      return;
    }

    if(user.password !== loginInfo.password){
      toast.error("Invalid credentials");
      
      return;
    }
    userLogin(user);
    toast.success("Logged successfully!");
    navigate('/dashboard');


  }

  return (
    <Container className='my-3'>
      <Row className='justify-content-center'>
        <Col md={4}>
          <h4>Login</h4>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={4}>
          <Form>
            <Form.Group as={Col} className='mb-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' onChange={(event)=>handleChange(event)} />
            </Form.Group>
            <Form.Group as={Col} className='mb-2'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Enter password" onChange={(event)=>handleChange(event)} />
            </Form.Group>
            <div className='d-grid'>
              <Button variant="primary" type="submit" onClick={(event)=>handleLogin(event)}>
              Login
            </Button>
            </div>
            <div className='mt-2 text-center'>
              If you don't have an account, <Link className='link-danger' to={'/register'}>sign up now</Link>
            </div>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}

export default Login