import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import Crud from './components/Crud';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/' element={ <Crud/>}/>
     <Route path='/AllUser' element={ <AllUser/>}/>
     <Route path='/add' element={ <AddUser/>}/>
     <Route path='/editUser/:id' element={ <EditUser/>}/>

      
      
    </Routes>
   

      </BrowserRouter>
  );
}

export default App;
