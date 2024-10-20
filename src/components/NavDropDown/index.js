import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { Image, DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <Image>
    <a href="/images/Charles Clark Resume.pdf" download>
      <img width="100px" src="images/mailbox.png" alt="Download Resume" />
    </a>
  </Image>
);

export default NavDropDown
