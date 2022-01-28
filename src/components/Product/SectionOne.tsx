import {
  Flex, Grid, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

const SectionOne = (): JSX.Element => {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex w="70%">
        <Image w="60%" src="/images/secOne.svg" alt="Product description representation image" />
        <Grid templateRows="repeat(5, 0.5fr)" gap={2}>
          <Text fontSize="24px">
            CONHEÇA seu <span style={{ fontWeight: 'bold' }}> público </span>
          </Text>
          <Text fontSize="24px">
            ACOMPANHE suas vendas em <span style={{ fontWeight: 'bold' }}> qualquer lugar</span>
          </Text>
          <Text fontSize="24px">
            VENDAS online com <span style={{ fontWeight: 'bold' }}> eficiência máxixa</span>
          </Text>
          <Text fontSize="24px">
            FIDELIZE clientes com <span style={{ fontWeight: 'bold' }}> insights preciosos</span>
          </Text>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default SectionOne;
