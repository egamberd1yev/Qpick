import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <section style={{ backgroundColor: '#EAEAEA', display: 'flex', justifyContent: 'center', padding: '20px 0' }} height={{base: '100vh', md: '40vh'}}>
      <Container>
        <Box bgColor='#101010' height={{base: '120vh', md: '30vh'}} borderRadius='30px' display='flex' justifyContent='center' alignItems='center' flexDirection={{base: 'column', md: 'inherit'}}>
          <Text style={{fontWeight: '600', maxWidth: '300px'}} fontSize={{base: '20px', md: '30px'}}>
            Аксессуары для
            Iphone 13 Pro Max
          </Text>

          <img style={{height: '100%', backgroundColor: 'transparent'}} src="src/assets/iphone.png" alt="" />
        </Box>
      </Container>
    </section>
  )
}

export default About