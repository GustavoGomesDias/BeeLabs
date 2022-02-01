import React from 'react';
import {
  chakra, Flex, Image, Text, useMediaQuery,
} from '@chakra-ui/react';

const Description = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      w="100%"
      mt="4%"
    >
      <Flex
        justifyContent="center"
        flexDir="column"
        w={isSmallScreen ? '90%' : '66%'}
      >
        <chakra.h1
          fontSize={isSmallScreen ? '24px' : '48px'}
          color="#042454"
          fontWeight="bold"
          w={isSmallScreen ? '100%' : '60%'}
          textAlign={isSmallScreen ? 'center' : 'left'}
        >
          VENDAS QUE RENDEM<br /> MUITO MAI$
        </chakra.h1>
        <Flex
          w="full"
          flexDir={isSmallScreen ? 'column' : 'row'}
        >
          <Text w="100%" fontSize={isSmallScreen ? '18px' : '24px'} textAlign={isSmallScreen ? 'center' : 'left'} mt="2px">
            Sua estratégia de marketing começa e continua com Bee CRM.
            Aqui você conta com
            <span style={{
              fontWeight: 'bold', color: 'black',
            }}
            > muito mais eficiência desde o primeiro contato à conclusão das vendas
            </span>,
            melhorando também o relacionamento com o cliente.
          </Text>
          <Image src="/images/home.svg" w={isSmallScreen ? '100%' : '60%'} alt="Home description representation image" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Description;
