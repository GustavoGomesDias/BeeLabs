import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import classes from './Product.module.css';

const AnimationTxt = (): JSX.Element => {
  return (
    <Flex w="100%" h="200px" borderBottom="1px solid #34b4ac" flexDir="column" alignItems="center" justifyContent="center">
      <p className={classes.mobile} />
      <Flex alignItems="flex-end" justifyContent="center" h="20%">
        <Image w="50%" src="/images/logo.svg" alt="Bee CMR logo" />
      </Flex>
    </Flex>
  );
};

export default AnimationTxt;
