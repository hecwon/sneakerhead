import React, { useState } from 'react';
import { Card, Center, Text, CardBody, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { yearParser, nameParser, shoeParser, genderParser } from '../scoreParsers.js';

const Score = ( {scorecard, shoes } ) => {
  console.log('scorecard: ', scorecard);
  // changed line 7 scorecard from shoes
  let totalScore = 0;
  for (var i = 0; i < scorecard.length; i++) {
    const yearPoint = yearParser(scorecard[i].year, shoes[i].year) * 300;
    const namePoint = nameParser(scorecard[i].name, shoes[i].name) * 300;
    const shoePoint = shoeParser(scorecard[i].model, shoes[i].shoe) * 300;
    const genderPoint = genderParser(scorecard[i].gender, shoes[i].gender) * 100;
    console.log('input name: ', scorecard[i].name, 'input shoe model: ', scorecard[i].model, 'input year: ', scorecard[i].year, 'input shoe: ', scorecard[i].gender, 'yearPoint: ', yearPoint, ', namePoint: ', namePoint, ', shoePoint: ', shoePoint, ', genderPoint: ', genderPoint);
    totalScore = totalScore + yearPoint + namePoint + genderPoint + shoePoint;
  }
  console.log('total score: ', totalScore);
  const percentCorrect = totalScore/10000;


  return (
    <>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1587960184060-aa880aabdd04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      align={'center'}
      justify={'center'}
    >
        <Center name='center' py={50} align={'center'} justify={'center'}>
          <Box
            align={'center'}
            role={'group'}
            maxW={'75vw'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
              <Card>
                <CardBody align='center'>
                  <Text fontSize='4xl'>Your score is...</Text>
                  <Text fontSize='5xl'>{totalScore}!</Text>
                  <Text>(out of 10,000)</Text>
                  {(percentCorrect < 25) ? <Text fontSize='3xl'>Hmm. No one said it would be easy...</Text> : null}
                  {(percentCorrect < 50 && percentCorrect >= 25) ? <Text fontSize='3xl'>Okay, you know a little somethin'. Not bad!</Text> : null}
                  {(percentCorrect >= 50 && percentCorrect < 75) ? <Text fontSize='3xl'>Wow, you really know your stuff.</Text> : null}
                  {(percentCorrect >= 75) ? <Text fontSize='3xl'>You are a Certified Sneakerhead.</Text> : null}
                </CardBody>
              </Card>
          </Box>
        </Center>
      </Flex>
    </>
  )
}

export default Score;