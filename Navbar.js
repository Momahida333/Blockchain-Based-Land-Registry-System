import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Container } from 'react-bootstrap'

function Navbar() {
  return (
   <nav className={styles.mainnav}>
    <Container>
        <ul>
        <li><Link href='/'>Home</Link> </li>
        <li> <Link href='/login'>Login</Link> </li>
        <li><Link href='/registration'>Registration</Link></li>
    </ul>
    </Container>
    
   </nav>
  )
}

export default Navbar