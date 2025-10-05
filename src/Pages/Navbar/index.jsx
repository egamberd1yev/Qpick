import React from 'react'
import { Container, Box, Select } from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";

const Navbar = () => {

  const breakpoints = {
    base: "0rem", // 0px
    sm: "30rem", // ~480px
    md: "48rem", // ~768px
    lg: "62rem", // ~992px
    xl: "80rem", // ~1280px
    "2xl": "96rem", // ~1536px
  }

  return (
    <nav style={{ backgroundColor: '#EAEAEA' }}>
      <Container>
        <Box display='flex' justifyContent='space-between' alignItems='center' height='60px'>

          <Box display='flex' gap='50px'>
            <img src="src/assets/logo.svg" alt="" />
            <select style={{ backgroundColor: 'transparent', color: '#101010', border: 'none', fontWeight: '500', cursor: 'pointer' }}>
              <option value="en">Выбрать модель телефона</option>
              <option value="en">Iphone 15 Pro</option>
              <option value="en">Iphone 13</option>
              <option value="en">Iphone 17 Air</option>
              <option value="en">Iphone 16e</option>
              <option value="en">Iphone 14 Pro Max</option>
              <option value="en">Samsung S25</option>
              <option value="en">Infinix GT20 Pro</option>
            </select>
          </Box>

          <Box color='#838383' display='flex' gap='20px' cursor='pointer'>
            <FaRegHeart />
            <MdOutlineShoppingCart />
          </Box>
        </Box>
      </Container>
    </nav>
  )
}

export default Navbar