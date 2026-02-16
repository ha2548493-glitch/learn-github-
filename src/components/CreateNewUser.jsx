import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateNewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const history=useNavigate();
 function UpdateUser() {
    axios.put('https://69379f954618a71d77cd0fa3.mockapi.io/CrudAPI', { firstName, lastName, age, email, phone, password }).then((responce) => {
      console.log("---->", responce.data)
      // history(-1)
    }).catch((error) => {
      setError(true)
    }).finally((loading) => {
      setLoading(false)
    })
  }


  function CreateUser() {
    axios.post('https://69379f954618a71d77cd0fa3.mockapi.io/CrudAPI', { firstName, lastName, age, email, phone, password }).then((responce) => {
      console.log("---->", responce.data)
      // history(-1)
    }).catch((error) => {
      setError(true)
    }).finally((loading) => {
      setLoading(false)
    })
  }
  useEffect(() => {
    CreateUser()
  },)
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>
        Create New User
      </h1>
      <div className='formdiv'>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">First Name </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setFirstName(e.target.value)} value={firstName}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Last Name </label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setLastName(e.target.value)} value={lastName}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Age </label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setAge(e.target.value)} value={age}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Phone </label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => setPhone(e.target.value)} value={phone}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}

export default CreateNewUser;