import {
  Button,
  chakra, Flex, Text, useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import SecTwoList from './SecTwoList';
import AnimationTxt from './AnimationTxt';

const SectionTwo = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isMdScreen] = useMediaQuery('(max-width: 960px)');

  return (
    <Flex w="full" justifyContent="center" p="1em" flexDir="column" alignItems="center">
      <Flex w={isSmallScreen || isMdScreen ? '100%' : '90%'} justifyContent="center" flexDir={isSmallScreen || isMdScreen ? 'column' : 'row'}>
        <Flex w={isSmallScreen || isMdScreen ? '100%' : '40%'} flexDir="column" lineHeight={1.2}>
          <chakra.h1 textAlign={isSmallScreen || isMdScreen ? 'center' : 'unset'} fontSize={isSmallScreen || isMdScreen ? '26px' : '48px'} color="#042454" fontWeight="bold">CONTROLE A EQUIPE. <br /> MELHORE A GESTÃO.</chakra.h1>
          <chakra.h3 textAlign={isSmallScreen || isMdScreen ? 'center' : 'unset'} fontSize={isSmallScreen || isMdScreen ? '24px' : '36px'} color="#4d4d4d" fontWeight="bold">Conte com um sistema intuitivo e fácil de usar</chakra.h3>
        </Flex>

        {isSmallScreen || isMdScreen ? <AnimationTxt /> : <SecTwoList />}
      </Flex>
      <Flex flexDir="column" my="2.5em">
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
          TENHO INTERESSE
        </Button>
        <Text fontSize="14px" textAlign="center" mt="0.5em" fontWeight="bold">* Teste gratuito de 7 dias</Text>
      </Flex>
      <Flex mt="2.5em" w="90%" flexDir={isSmallScreen ? 'column' : 'row'}>
        <Flex
          w="100%"
          justifyContent="center"
          bgImage="/images/picture1.svg"
          mr="1em"
          bgSize="100%"
          bgPos="center"
          bgRepeat="no-repeat"
          h={isSmallScreen ? '400px' : '600px'}
        >
          <Text
            fontSize={isSmallScreen ? '20px' : '30px'}
            textAlign="center"
            fontWeight="bold"
            w={isSmallScreen ? '80%' : '50%'}
            mt={isSmallScreen ? '10%' : '5%'}
            color="#042454"
          >
            TODOS OS DEPARTAMENTOS DA SUA EMPRESA CONECTADOS
          </Text>
        </Flex>
        <Flex
          w="100%"
          justifyContent="center"
          bgImage="/images/picture2.svg"
          bgSize="100%"
          bgPos="center"
          bgRepeat="no-repeat"
          h={isSmallScreen ? '400px' : '600px'}
          mt={isSmallScreen ? '10%' : 'none'}
        >
          <Text
            fontSize={isSmallScreen ? '20px' : '30px'}
            textAlign="center"
            fontWeight="bold"
            w={isSmallScreen ? '80%' : '50%'}
            mt={isSmallScreen ? '10%' : '5%'}
            color="#fff"
          >
            TREINAMENTO COMPLETO E SUPORTE 24h
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionTwo;
