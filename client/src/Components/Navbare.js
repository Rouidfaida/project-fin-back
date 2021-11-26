import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userAction';
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { GiSpellBook } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbare = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout());}
    return (
        <div>
            <div style={{backgroundColor:"black",border: "3px  solid",height:"100px"}}>
               
                <div style={{display:"flex"}}>
                <GiSpellBook style={{marginTop:"20px",width:"50px",height:"50px",color:"orange"}}/>            <div style={{display:"block"}}>
            <h2 style={{fontStyle:'italic',color:"white",fontSize:"20px",marginTop:"20px"}}>libraire en ligne </h2>
            <h6 style={{color:"orange"}}>Facilite ton vie </h6>
            </div>
            <form style={{marginLeft:"300px",marginTop:"40px",height:"20px"}}>
                <input type="text" style={{width:"500px",height:"30px"}} />
                <AiOutlineSearch style={{color:"white",backgroundColor:"orange",height:"28px",marginTop:"-5px",width:'28px'}}/>
            </form>
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
    <NavDropdown title="Categories" id="basic-nav-dropdown" style={{color:"black"}}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      {/* <Link  to="/product"  style={{color:"white",marginTop:"10px",marginLeft:"20px"}} >product
</Link> */}
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navbare
