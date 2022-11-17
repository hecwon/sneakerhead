import * as React from 'react';
import { useState } from 'react';
import {
  Input,
  VStack,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  HStack,
  Button,
  Image } from '@chakra-ui/react'

const Play = ({ page, shoe, setTried, handleScorecard }) => {
  const [guess, setGuess] = useState({
    year: '',
    name: '',
    model: '',
    gender: ''
  })
  const handleGuess = (input, property) => {
    guess[property] = input;
    setGuess({...guess});
  }
  const handleGender = (input) => {
    guess.gender = input;
    setGuess({...guess});
  }
  const handleNext = (e) => {
    e.preventDefault();
    handleScorecard(guess);
    setGuess({
      year: '',
      name: '',
      model: '',
      gender: ''
    });
    const nextPage = (page + 1).toString();
    setTried(nextPage);
  }

  return (
    <Center py={12}
      backgroundImage={
      'url(https://images.unsplash.com/photo-1580195367146-12afeca8d880?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80)'
    }>
      <Box
        role={'group'}
        p={6}
        maxW={'75vw'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'60vh'}
          align={'center'}
        >
          <Image
            rounded={'lg'}
            align={'center'}
            height={'50vh'}
            width={'90vw'}
            objectFit={'contain'}
            src={shoe.picture} // PICTURE HERE
          />
        </Box>
      <VStack>
        <form onSubmit={handleNext}>
          <br />
          <Input
            id="name"
            type="text"
            size="lg"
            variant="flushed"
            placeholder="WHAT IS THE NAME OF THIS SHOE?"
            value={guess.name}
            onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
          />
          <br /><br />
          <Input
            width="35vw"
            id="model"
            type="text"
            size="lg"
            variant="flushed"
            placeholder="WHICH JORDAN IS THIS?"
            value={guess.model}
            onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
          />
          <br /><br />
          <Input
            id="year"
            type="number"
            size="lg"
            variant="flushed"
            placeholder="WHAT YEAR DID THIS SHOE RELEASE?"
            value={guess.year}
            onChange={(e) => {handleGuess(e.target.value, e.target.id)}}
          />
          <br /><br />
          <Stack direction={'row'} spacing={2} justify={'center'}>
            <Button type="button" size="lg" width="20vw" id="Men" onClick={(e) => {handleGender(e.target.id)}}>MEN</Button>
            <Button type="button" size="lg" width="20vw" id="Women" onClick={(e) => {handleGender(e.target.id)}}>WOMEN</Button>
          </Stack>
          <br />
          <Stack justify={'center'}>
            {(page < 10) ?
              <Button size="lg" type="submit" >NEXT SHOE</Button>
              : <Button size="lg" type="submit">SEE MY SCORE</Button>
            }
          </Stack>
        </form>
      </VStack>
      </Box>
    </Center>
  );
}

  export default Play;




//   <Stack pt={10} align={'center'}>
//   <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//     Brand
//   </Text>
//   <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//     Nice Chair, pink
//   </Heading>
//   <Stack direction={'row'} align={'center'}>
//     <Text fontWeight={800} fontSize={'xl'}>
//       $57
//     </Text>
//   </Stack>
// </Stack>