import React from 'react';
import { chakra, Text } from '@chakra-ui/react';
import Circle from '../Circle/Circle';
import Description from './Description';

const HomePage = (): JSX.Element => {
  return (
    <>
      <chakra.h2
        w="80%"
        display="flex"
        bg="#34b4ac"
        justifyContent="flex-end"
        fontSize="36px"
        color="#fff"
        px={8}
        py={2}
      >
        <Text>FEITO POR BRASILEIROS</Text> <Circle /> <Text fontWeight="bold">100% EM PORTUGUÊS</Text>
      </chakra.h2>
      <Description />
    </>
  );
};

export default HomePage;
