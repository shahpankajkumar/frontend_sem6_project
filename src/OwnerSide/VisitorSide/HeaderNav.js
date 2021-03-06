import React from 'react'
import styles from './HeaderNav.module.css';
import { NavLink,} from 'react-router-dom'

 

export default function HeaderNav (props) {



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
      </header>


    )
  }



