import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const nextPage=useNavigate();
    const addUserOne=()=>{
        return(
            nextPage("/addUserOne")
        )
    }
     const addUserSec=()=>{
        return(
            nextPage("/addUserSec")
        )
    }
     const addUserThird=()=>{
        return(
            nextPage("/addUserThird")
        )
    }
  return (
    <div>
        <h1>
            This Is My Home Page
        </h1>
        <button type="button" class="btn btn-primary btn-lg" onClick={addUserOne}>Create User</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={addUserSec}>Create User</button>
        <button type="button" class="btn btn-primary btn-lg" onClick={addUserThird}>Create User</button>
    </div>
  )
}

export default AddUser