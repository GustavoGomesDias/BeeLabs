import {
  Button,
  Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

const SectionOne = (): JSX.Element => {
  return (
    <Flex w="100%" justifyContent="center" flexDir="column" alignItems="center" mb="5px">
      <Flex w="70%">
        <Image w="60%" src="/images/secOne.svg" alt="Product description representation image" />
        <Grid templateRows="repeat(5, 0.5fr)" gap={2} ml="1em">
          <Text fontSize="24px" mt="1.8em">
            CONHEÇA seu <span style={{ fontWeight: 'bold', color: 'black' }}> público </span>
          </Text>
          <Text fontSize="24px">
            ACOMPANHE suas <span style={{ fontWeight: 'bold', color: 'black' }}> vendas</span> em <span style={{ fontWeight: 'bold' }}> qualquer lugar</span>
          </Text>
          <Text fontSize="24px">
            VENDAS online com <span style={{ fontWeight: 'bold', color: 'black' }}> eficiência máxixa</span>
          </Text>
          <Text fontSize="24px">
            FIDELIZE clientes com <span style={{ fontWeight: 'bold', color: 'black' }}> insights preciosos</span>
          </Text>
        </Grid>
      </Flex>
      <Button
        size="lg"
        borderRadius="0px"
        fontWeight="medium"
        px="2em"
        bg="#34b4ac"
        color="#fff"
        _hover={{
          bg: '#28a199',
        }}
      >
        Fale direto com um especialista
      </Button>
    </Flex>
  );
};

export default SectionOne;
