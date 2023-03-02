
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id,setId]=useState('');
  const [empname,setEmpname]=useState('');
  const [age,setAge]=useState('');
  const [designation,setDesignation]=useState('');
  const [salary,setSalary]=useState(0);


const history=useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault();// 

    let ids=uuid();
    console.log(ids);

    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    
    Employee.push({
      id:uniqueId,
      empnme:empname,
      age:age,
      designation:designation,
      salary:salary
    })
    history('/')

  }
  return (
   
      <>
      <h1 className='text-secondary text-center m-4'> Add Employee Management System</h1>
      <p className='p-3'>
            An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions</p>
      <   Row>
      <Col mb-3 md={6}><img src='https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' width={'700px'}></img>
      </Col>
      <Col md={6}><Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your id"
          //value={id} 
          onChange={(e)=>setId(e.target.value)}
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your Name"
         // value={empname}
          onChange={(e)=>setEmpname(e.target.value)} 
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control type="email" placeholder="Enter your age"
          //value={age} 
          onChange={(e)=>setAge(e.target.value)}
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dedignation</Form.Label>
          <Form.Control type="email" placeholder="Enter your designation"
           //value={designation} 
           onChange={(e)=>setDesignation (e.target.value)}
           required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="email" placeholder="Enter your salary"
          //value={salary}
          onChange={(e)=>setAge(e.target.value)} 
          required/>
        </Form.Group>
  
        
        
        <Button variant="primary" onClick={(e)=>handleAdd(e)}  type="submit"> Add</Button>
      </Form></Col>
      </Row>
     </>
    )
  
}

export default Add