import React from 'react'
import styles from './HeaderNav.module.css';
import { NavLink,useHistory} from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
 

export default function HeaderNav (props) {

 
  const history=useHistory();
  function logout ()
  {
    localStorage.clear();      
    history.push('/visitor')

  }
    return (

      <header>
        <div className={styles.logo}><span className={styles.detailLogo}>PROPERTYHUB</span><br /></div>
        <nav>
          <div className={styles.navbar}>

          <NavLink to="/visitor/display-HomePage">Home</NavLink>
          <NavLink to="/visitor/display-ListingProperty">All Property</NavLink>
          <NavLink to="/visitor/display-about">About us</NavLink>
          <NavLink to="/visitor/display-contactus">Contact us</NavLink>
          <NavLink className={styles.registerBtn} to="/visitor/Login-user">Login & Signup</NavLink>

          </div>

        </nav>
      
       <nav>

              <NavDropdown.Item className={styles.registerBtn} onclick={logout}>logout</NavDropdown.Item>
           
       </nav>

       
      </header>


    )
  }



