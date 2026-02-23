import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import './components/crudstyle.css'
import AddUser from './components/addUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUserOne from './components/createUserOne';
import CreateUserSec from './components/createUserSec';
import CreateUserThird from './components/createUserThird';
import CreateNewUser from './components/CreateNewUser';
import GitLearn from './components'

function App() {
  return (
    <div className="App">
      {/* <CreateNewUser/> */}
     {/* <HomePage/> */}
     {/* <AddUser/> */}
     <GitLearn/>
     <BrowserRouter>
     <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/CreateUser" element={<CreateNewUser/>}/>
    <Route exact path='/' element={<CreateNewUser/>}/>
    {/* <Route exact path='/addUserThird' element={<CreateUserThird/>}/> */}
    {/* <Route exact path='/Home' element={<AddUser/>}/> */}
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
