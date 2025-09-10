import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { FaRegEdit } from "react-icons/fa";

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{

        setUsers(JSON.parse(localStorage.getItem('users')));
        console.log("inside useEffect-------------->");

        return ()=>{
            console.log("component unmounted-------------->");
        }
        
    },[]); //dependancy array

    const addUser = ()=>{
        setUsers((prev)=>{
            const updatedUsers = [...prev];
            updatedUsers.push({userId:( users.length ?? 0 ) + 1});

            return updatedUsers;
        })
    }

    const handleCountChange = ()=>{
        setCount(count + 1);
    }
    
    console.log("users----------->", users);
    console.log("count----------->", count);
    

  return (
    <Container className='mt-4'>
       <Row>
        <Col>
            <h2>Users List</h2>
            <button onClick={addUser}>
                Add User
            </button>
            <button onClick={handleCountChange}>
                Change count
            </button>
        </Col>
       </Row>
        <Row>
            <Col>
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>Email</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i)=>(
          <tr key={i}>
          <td>{i + 1}</td>
          <td>
            {user.fullName}
          </td>
          <td>
            {user.email}
          </td>
          <td>
            Active
          </td>
          <td>
            <FaRegEdit/>
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

export default Users