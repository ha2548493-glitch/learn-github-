import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUserThird = () => {
    const previous=useNavigate();
    const Home=()=>{
        previous("/Home")
    }
  return (
    <div>
        <h1>
            this is my third page
        </h1>
        <button type="button" class="btn btn-primary btn-lg" onClick={Home}>Create User</button>
    </div>
  )
}

export default CreateUserThird