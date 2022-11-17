import * as React from 'react';
import { useState } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Input,
  useBreakpointValue,
  Card, CardHeader, CardBody, CardFooter,
} from '@chakra-ui/react';

const Welcome = ({ setTried, startGame }) => {
  const [userInfo, setUserInfo] = useState({
    username: null,
    name: null,
    email: null
  });
  const handleChange = (property, input) => {
    userInfo[property] = input;
    setUserInfo({...userInfo});
  }
  console.log('changed info: ', userInfo);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Play button clicked');
    setTried('0');
  }

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1580195367146-12afeca8d880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            SNEAKERHEAD?
          </Text>
          <Card>
            <CardBody maxW={'400px'} borderRadius='md' background="white" border-radius="5px">
            <Input name='username' variant='flushed' size='lg' placeholder='Username*' required onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
            <Input name='name' variant='flushed' size='lg' placeholder='Name*' required onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
            <Input name='email' variant='flushed' size='lg' placeholder='Email' onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
            </CardBody>
          </Card>
          <Stack direction={'row'}>
            <Button
              type="submit"
              onClick={handleSubmit}
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Let's Play!
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              What?
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Welcome;






//   return (
//     <>
//       <div></div>
//       <form onSubmit={handleSubmit}>
//         Username*
//         <br />
//         <input type="text" name="username"  />
//         <br />Name*<br />
//         <input type="text" name="name" required onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
//         <br />Email<br />
//         <input type="text" name="email" onChange={(e) => {handleChange(e.target.name, e.target.value)}}/>
//         <br />
//         <button type="submit">PLAY</button>
//       </form>
//       <div>
//         <h3>Hello! How much of a sneakerhead are you? Let's find out!</h3>
//         <br />
//         <h4>Rules</h4>
//         <br />
//         1. Get the details of the shoe right.
//         <br />
//         2. Get all 10 shoes right, including their release year & formal release name (bred is ok) to get a perfect score of <b>10,000</b>.
//         <br />
//         3. Flex on 'em
//         <br />
//       </div>
//     </>
//   )
// }



