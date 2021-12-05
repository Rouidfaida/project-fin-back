import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorielist } from '../redux/categorieAction'
import { filterProduct } from '../redux/productAction'
import { logout } from '../redux/userAction';
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { GiSpellBook } from 'react-icons/gi';
import { AiOutlineSearch ,AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { orange } from '@mui/material/colors';
import ProductCard from './ProductCard';

const Navbare = () => {
    const logOut = () => {
        dispatch(logout());}
        const categories = useSelector(state => state.allcategorie)
        // const {cartItem} = useSelector(state => state.allcart)
        const [category, setCategory] = useState('')
        const handleCategory = (e) => {
            setCategory(e.target.value);
            dispatch(filterProduct(e.target.value))
          };
          const dispatch = useDispatch()
        
          // const getCartCount = () => {
          //   return cartItem.reduce((qty, item) => qty + item.qty, 0);
          // };          
        
    return (
        <div>
            <div style={{backgroundColor:"black",border: "3px  solid",height:"100px"}}>
               
                <div style={{display:"flex"}}>
                <GiSpellBook style={{marginTop:"20px",width:"50px",height:"50px",color:"orange"}}/>            <div style={{display:"block"}}>
            <h2 style={{fontStyle:'italic',color:"white",fontSize:"20px",marginTop:"20px"}}>libraire en ligne </h2>
            <h6 style={{color:"orange"}}>Facilite ton vie </h6>
            </div>
            <form style={{marginLeft:"200px",marginTop:"40px",height:"20px"}}>
                <input type="text" style={{width:"500px",height:"30px"}} />
                <AiOutlineSearch style={{color:"white",backgroundColor:"orange",height:"28px",marginTop:"-5px",width:'28px'}}/>
            </form>
          <div style={{display:"block",marginLeft:"100px",marginTop:"10px"}}>
            {/* <span style={{color:"white"}}>0</span> */}
            <span style={{color:"white"}}> 0 </span>
            <AiOutlineShoppingCart style={{color:'orange',width:"40px",height:'40px'}}/>
          </div>
          
            <div style={{display:"flex"}}>
                    <Link to='/sign' style={{color:"white"}}>
                        <h6 style={{color:"white",marginTop:"10px",marginLeft:"250px"}}>Sign Up</h6>
                    </Link>
                    <Link to='/login' style={{color:"white"}}>
                        <h6 style={{color:"white",marginTop:"10px",marginLeft:"20px"}}>Login in</h6>
                    </Link>
                    <Link  to="/login"  style={{color:"white",marginTop:"10px",marginLeft:"20px"}} onClick={logOut}>
                  LogOut
                </Link>
                </div>
            </div>
          
                </div>
              
           <Navbar style={{backgroundColor:"#FF940C"}}>
    <Container>
    <NavDropdown title="Categories" id="basic-nav-dropdown" style={{color:"black"}}  name="category" value={category} onChange={handleCategory}>
    {/* <option value="all" >All Products</option>
    <option value="all">All Products</option>

            {categories.categories.map((category) => (
              <option value={ category.name} key={category._id}>
                {category.name}
              </option>
            ))}
          </NavDropdown> */}
             

</NavDropdown>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <Link  to="/product"  style={{color:"white",marginTop:"10px",marginLeft:"20px"}} >product
</Link> */}
    <Filter/> 

    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navbare
