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
        w={isSmallScreen ? '100%' : '90%'}
        mt="4%"
        bg="#34b4ac"
        px={isSmallScreen ? 4 : 10}
        py={isSmallScreen ? 6 : 10}
      >
        <chakra.h1
          fontSize={isSmallScreen ? '26px' : '48px'}
          color="#042454"
          fontWeight="extrabold"
          textAlign={isSmallScreen ? 'center' : 'left'}
        >
          MAIS DE 5.000 {isSmallScreen && <br />}CLIENTES ATIVOS
        </chakra.h1>
        <Text fontSize={isSmallScreen ? '18px' : '30px'} color="#fff" mt="5px" textAlign={isSmallScreen ? 'center' : 'left'}>
          E NÃO IMPORTA {isSmallScreen && <br />}O TAMANHODA SUA EMPRESA.<br />
          OS PLANOS BEE CRM SÃO PERSONALIZADOS E SOB MEDIDA.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
