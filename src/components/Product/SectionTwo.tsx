import {
  Button,
  chakra, Flex, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const SectionTwo = (): JSX.Element => {
  return (
    <Flex w="full" justifyContent="center" p="2em" flexDir="column" alignItems="center">
      <Flex w="90%" justifyContent="center">
        <Flex w="40%" flexDir="column">
          <chakra.h1 fontSize="48px" color="#042454" fontWeight="bold">CONTROLE A EQUIPE. <br /> MELHORE A GESTÃO.</chakra.h1>
          <chakra.h3 fontSize="36px" color="#4d4d4d" fontWeight="bold">Conte com um sistema intuitivo e fácil de usar</chakra.h3>
        </Flex>

        <UnorderedList fontSize="24px" w="40%" spacing={3}>
          <ListItem><span style={{ fontWeight: 'bold', color: 'black' }}>Automatize</span> tarefas cotidianas</ListItem>
          <ListItem>Crie e organize <span style={{ fontWeight: 'bold', color: 'black' }}>módulos</span> com facilidade</ListItem>
          <ListItem>Configure as etapas do <span style={{ fontWeight: 'bold', color: 'black' }}>funil de vendas</span></ListItem>
          <ListItem>Comunicação <span style={{ fontWeight: 'bold', color: 'black' }}>rastreada</span></ListItem>
          <ListItem>Acompanhe o progresso de vendas <span style={{ fontWeight: 'bold', color: 'black' }}>em tempo real</span></ListItem>
        </UnorderedList>
      </Flex>
      <Flex flexDir="column">
        <Button
          size="md"
          borderRadius="0px"
          fontWeight="medium"
          px="2em"
          bg="#34b4ac"
          color="#fff"
          _hover={{
            bg: '#28a199',
          }}
          mt="20px"
        >
          TENHO INTERESSE
        </Button>
        <Text fontSize="14px" textAlign="center" mt="0.5em">* Teste gratuito de 7 dias</Text>
      </Flex>
      <Flex>
        <Flex bgImage="/images/picture1.svg" bgSize="100%" bgRepeat="no-repeat" h="500px">
          <Text>TODOS DEPARTAMENTOS DA SUA EMPRESA CONECTADOS</Text>
        </Flex>
        <Flex bgImage="/images/picture2.svg" bgSize="100%" bgRepeat="no-repeat" h="500px">
          <Text>TODOS DEPARTAMENTOS DA SUA EMPRESA CONECTADOS</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionTwo;
