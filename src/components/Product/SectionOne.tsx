import React from 'react';
import {
  Button,
  Flex, Grid, Image, Text, useMediaQuery,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const SectionOne = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isMdScreen] = useMediaQuery('(max-width: 1000px)');

  return (
    <Flex w="100%" justifyContent="center" flexDir="column" alignItems="center" mb="5px">
      <Flex w={isMdScreen && !isSmallScreen ? '90%' : '70%'}>
        {!isSmallScreen && (
          <Image
            w="60%"
            src="/images/secOne.svg"
            alt="Product description representation image"
          />
        )}
        <Grid templateRows="repeat(5, 0.5fr)" gap={isMdScreen ? 0 : 2} ml="1em">
          <Flex alignItems="center" mt="1.8em">
            {isSmallScreen && (
              <Flex mr="15px">
                <FaCheck size="20px" color="#34b4ac" style={{ marginRight: '5px' }} />
              </Flex>
            )}
            <Text fontSize={isSmallScreen || isMdScreen ? '18px' : '24px'}>
              CONHEÇA seu <span style={{ fontWeight: 'bold', color: 'black' }}> público</span>
            </Text>
          </Flex>
          <Flex alignItems="center">
            {isSmallScreen && (
              <Flex mr="15px">
                <FaCheck size="20px" color="#34b4ac" style={{ marginRight: '5px' }} />
              </Flex>
            )}
            <Text fontSize={isSmallScreen || isMdScreen ? '18px' : '24px'}>
              ACOMPANHE suas <span style={{ fontWeight: 'bold', color: 'black' }}> vendas</span> em <span style={{ fontWeight: 'bold', color: 'black' }}> qualquer lugar</span>
            </Text>
          </Flex>
          <Flex alignItems="center">
            {isSmallScreen && (
              <Flex mr="15px">
                <FaCheck size="20px" color="#34b4ac" style={{ marginRight: '5px' }} />
              </Flex>
            )}
            <Text fontSize={isSmallScreen || isMdScreen ? '18px' : '24px'}>
              VENDAS online com <span style={{ fontWeight: 'bold', color: 'black' }}> eficiência máxixa</span>
            </Text>
          </Flex>
          <Flex alignItems="center">
            {isSmallScreen && (
              <Flex mr="15px">
                <FaCheck size="20px" color="#34b4ac" style={{ marginRight: '5px' }} />
              </Flex>
            )}
            <Text fontSize={isSmallScreen || isMdScreen ? '18px' : '24px'}>
              FIDELIZE clientes com <span style={{ fontWeight: 'bold', color: 'black' }}> insights preciosos</span>
            </Text>
          </Flex>
        </Grid>
      </Flex>
      <Button
        size={isSmallScreen ? 'md' : 'lg'}
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
