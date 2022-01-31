import React from 'react';
import { chakra, Text, useMediaQuery } from '@chakra-ui/react';
import Circle from '../Circle/Circle';
import Description from './Description';

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <chakra.h2
        w="90%"
        display="flex"
        bg="#34b4ac"
        justifyContent="flex-end"
        fontSize={isSmallScreen ? '20px' : '36px'}
        color="#fff"
        px={isSmallScreen ? 4 : 8}
        py={2}
        letterSpacing={4}
      >
        <Text textAlign="right">FEITO POR BRASILEIROS</Text> <Circle
          borderRadius={isSmallScreen ? '' : '50%'}
          width={isSmallScreen ? '1px' : '10px'}
        /> <Text fontWeight="bold">100% EM PORTUGUÊS</Text>
      </chakra.h2>
      <Description />
    </>
  );
};

export default HomePage;
