import React from 'react';
import {
  chakra, Flex, Text, useMediaQuery,
} from '@chakra-ui/react';

const About = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      w="full"
      justifyContent="flex-end"
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        w="90%"
        mt="4%"
        bg="#34b4ac"
        px={4}
        py={6}
      >
        <chakra.h1
          fontSize={isSmallScreen ? '24px' : '48px'}
          color="#042454"
          fontWeight="extrabold"
        >
          MAIS DE 5.000 CLIENTES ATIVOS
        </chakra.h1>
        <Text fontSize="18px" color="#fff" mt="5px">
          E NÃO IMPORTA O TAMANHO DA SUA EMPRESA.<br />
          OS PLANOS BEE CRM SÃO PERSONALIZADOS E SOB MEDIDA.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
