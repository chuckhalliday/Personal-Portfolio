import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavDropDown from '../components/NavDropDown';
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <NavDropDown />
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
