import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavDropDown from '../components/NavDropDown';
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <Analytics />
     <NavDropDown />
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
