import React from 'react'
import './Navbar.css'
import Addcontact from './Pages/Addcontact';
function Navbar() {
  const isAuth = localStorage.getItem("token");
  return (
    <div className='nav'>
        <div className='bac'>
        <h1>Allo-Allo</h1>
        </div>
    
        <ul className='navmunu'>
        {/* <li> <link to='/'></link>home1</li>
        <li><link to='/home2'></link> home2</li>
        <li> <link to='/home3'></link>home3</li>
        <li><link to='/home4'></link> home4</li> */}
        
        </ul>
        <div className='login'> 
        {isAuth?
          <button> Add contact </button >
        :<button> login</button >}
        

        </div>
        <Addcontact />
    </div>
  )
}
export default Navbar
