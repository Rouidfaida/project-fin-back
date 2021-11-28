import './App.css';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Navbare from './Components/Navbare';
import Admin from './Components/Admin';
import Product from './Components/Product';
import Livre from './Components/Livre';

import AddProduct from './Components/AddProduct';
// import 'antd/dist/antd.css';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path='/'element={<Home/>} />
        <Route path='/sign'element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/livre' element={<Livre/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
