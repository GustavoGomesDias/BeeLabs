import { chakra, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const About = (): JSX.Element => {
  return (
    <Flex
      w="full"
      justifyContent="flex-end"
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        w="80%"
        mt="4%"
        bg="#34b4ac"
        px={10}
        py={10}
      >
        <chakra.h1
          fontSize="48px"
          color="#042454"
          fontWeight="extrabold"
        >
          MAIS DE 5.000 CLIENTES ATIVOS
        </chakra.h1>
        <Text fontSize="30px" color="#fff" mt="5px">
          E NÃO IMPORTA O TAMANHO DA SUA EMPRESA.<br />
          OS PLANOS BEE CRM SÃO PERSONALIZADOS E SOB MEDIDA.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
