import React from 'react';
import {
  chakra, Flex, Image, Text,
} from '@chakra-ui/react';

const Description = (): JSX.Element => {
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
        w="66%"
      >
        <chakra.h1
          fontSize="48px"
          color="#042454"
          fontWeight="bold"
          w="60%"
        >
          VENDAS QUE RENDEM MUITO MAI$
        </chakra.h1>
        <Flex
          w="full"
        >
          <Text w="100%" fontSize="24px">
            Sua estratégia de marketing começa e continua com Bee CRM.
            Aqui você conta com
            <span style={{
              fontWeight: 'bold',
            }}
            > muito mais eficiência desde o primeiro contato à conclusão das vendas
            </span>,
            melhorando também o relacionamento com o cliente.
          </Text>
          <Image src="/images/home.svg" w="60%" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Description;
