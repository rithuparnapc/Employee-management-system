import React from 'react'
import Employee  from './Employee';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaPen,FaRegTrashAlt,FaUserPlus} from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Home() {
  const history=useNavigate()
  const handleDelete=(id)=>{
    var index=Employee.map(item=>item.id).indexOf(id);//index
    Employee.splice(index,1)
    console.log(Employee);
    history('/')
  }
  const handledit=(id,empname,age,designation,salary)=>{
    localStorage.setItem("ID",id);
    localStorage.setItem("NAME",empname);
    localStorage.setItem("AGE",age);
    localStorage.setItem("DESIGNATION",designation);
    localStorage.setItem("SALARY",salary);
  }
  return (
    <>
    <h1 className='text-secondary text-center m-4'>Employee Management System</h1>
    <p className='p-3'>
An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions</p>
    <Link to={'/add'}> <Button variant="success">Add Employee<FaUserPlus/></Button></Link>
   

    <h3 className='my-5'>List of Employees</h3>
         <Table striped bordered hover size="sm" className='p-3'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
         Employee && Employee.length>0?
         Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empname}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                  <Link to={'/edit'}><Button onClick={()=>handledit(item.id,item.empname,item.age,item.designation,item.salary)} variant="success"><FaPen/></Button></Link> 
                  <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaRegTrashAlt/></Button></td>
              </tr>
              )):'No data available'
              }
              

    </tbody>
  </Table>
  </>
  )
}

export default Home