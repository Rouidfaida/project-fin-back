import './App.css';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Navbare from './Components/Navbare';
import Admin from './Components/Admin';
import ProductList from './Components/ProductList';
import Livre from './Components/Livre';

import AddProduct from './Components/AddProduct';
import Info from './Components/Info';
import Profile from './Components/Profile';
// import 'antd/dist/antd.css';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route exact path='/'element={<Home/>} />
        <Route exact path='/sign'element={<SignUp/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/productList' element={<ProductList/>}/>
        <Route exact path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/livre' element={<Livre/>}/>
        <Route exact path="/infos/:id" element={<Info/>}/>
        <Route path='/profile' element={<Profile/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
