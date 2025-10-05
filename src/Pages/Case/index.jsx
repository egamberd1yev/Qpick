import React from 'react'
import { Container, Box, Wrap, Text } from '@chakra-ui/react'

const Case = () => {
  return (
    <section style={{ backgroundColor: '#EAEAEA', height: '190vh' }}>
      <Container>

        <Text fontWeight='600' fontSize='20px' color='#838383'>
          Чехлы
        </Text>

        <Box display='flex' justifyContent='center' flexWrap='wrap' gap='30px'>
          <div style={{ height: '410px', backgroundColor: '#FFFFFF', width: '350px', padding: '30px 0', borderRadius: '30px' }}>
            <Wrap display='flex' justifyContent='center'>
              <img src="src/assets/transparent.jpg" alt="" />
            </Wrap>

            <Text fontWeight='600' fontSize='17px' color='#1C1C27' textAlign='center' lineHeight='140%'>Стеклянные</Text>
          </div>

          <div style={{ height: '410px', backgroundColor: '#FFFFFF', width: '350px', padding: '30px 0', borderRadius: '30px' }}>
            <Wrap display='flex' justifyContent='center'>
              <img src="src/assets/silikon.jpg" alt="" />
            </Wrap>

            <Text fontWeight='600' fontSize='17px' color='#1C1C27' textAlign='center' lineHeight='140%'>Стеклянные</Text>
          </div>

          <div style={{ height: '410px', backgroundColor: '#FFFFFF', width: '350px', padding: '30px 0', borderRadius: '30px' }}>
            <Wrap display='flex' justifyContent='center'>
              <img src="src/assets/Leather.jpg" alt="" />
            </Wrap>

            <Text fontWeight='600' fontSize='17px' color='#1C1C27' textAlign='center' lineHeight='140%'>Стеклянные</Text>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default Case