import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
//  get post put patch delete 
const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const Create = useNavigate();
  // const history=useNavigate();
  const CreateUser = () => {
    return (
      Create("/CreateUser")
    )
  }

  // get API 
  function GetData() {
    axios.get('https://69379f954618a71d77cd0fa3.mockapi.io/CrudAPI').then((responce) => {
      setData(responce.data)
      console.log('==>', data)
    }).catch((error) => {
      setError(true)
    }).finally((loading) => {
      setLoading(false)
    })
  }
function DeleteUser(id){
  axios.delete(`https://69379f954618a71d77cd0fa3.mockapi.io/CrudAPI/${id}`).then((responce)=>{
    console.log("Delete User",responce);
    setData(prev=> prev.filter(item=> item?.id!==id));
  }).catch((error)=>{
    console.log("Error",error)
  })
  alert('Do you want to Delete this User')
}


  
  useEffect(() => {
    GetData();
  }, [])


  return (
    <div>
      <div className='header'>
        <h1 className='userh1'>
          Users Details
        </h1>
        <input type="search" placeholder='Search' className='searchinput' />
        <button type="button" class="btn btn-primary btn-lg" onClick={CreateUser}>Create User</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Password</th>
            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.password}</td>
                  <td style={{width:'100px'}}>
                    <FaUserEdit className='actionbutton' onClick={CreateUser}/><MdDeleteForever className='actionbutton2' onClick={()=>DeleteUser(item?.id)}/>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage