import React from 'react';
import {
  Button, ButtonGroup, chakra, Image,
} from '@chakra-ui/react';

const Header = (): JSX.Element => {
  return (
    <chakra.header
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p={8}
    >
      <Image ml="10%" src="/images/logo.svg" w="30%" h="20%" alt="Bee CMR logo" />
      <ButtonGroup px={6} display="flex" justifyContent="flex-end">
        <Button size="xs" borderRadius="0px" variant="link">CONTATO</Button>
        <Button size="xs" borderRadius="0px" borderWidth="1px" borderColor="#34b4ac" bg="#fff">LOGIN</Button>
        <Button size="xs" borderRadius="0px" borderWidth="1px" borderColor="#34b4ac" bg="#fff">TESTE GRÁTIS</Button>
      </ButtonGroup>
    </chakra.header>
  );
};

export default Header;
