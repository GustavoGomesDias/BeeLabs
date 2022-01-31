import React from 'react';
import {
  Button, ButtonGroup, chakra, Image, useMediaQuery,
} from '@chakra-ui/react';

const Header = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  return (
    <chakra.header
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p={isSmallScreen ? 2 : 8}
    >
      <Image ml={isSmallScreen ? '2%' : '10%'} src="/images/logo.svg" w="30%" h="20%" alt="Bee CMR logo" />
      <ButtonGroup px={2} display="flex" justifyContent="flex-end">
        <Button size="xs" borderRadius="0px" variant="link">CONTATO</Button>
        <Button size="xs" borderRadius="0px" borderWidth="1px" borderColor="#34b4ac" bg="#fff">LOGIN</Button>
        <Button size="xs" borderRadius="0px" borderWidth="1px" borderColor="#34b4ac" bg="#fff">TESTE GRÁTIS</Button>
      </ButtonGroup>
    </chakra.header>
  );
};

export default Header;
