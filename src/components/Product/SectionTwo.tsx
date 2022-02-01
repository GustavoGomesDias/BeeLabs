import {
  Button,
  chakra, Flex, Text, useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import SecTwoList from './SecTwoList';
import AnimationTxt from './AnimationTxt';

const SectionTwo = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex w="full" justifyContent="center" p="1em" flexDir="column" alignItems="center">
      <Flex w={isSmallScreen ? '100%' : '90%'} justifyContent="center" flexDir={isSmallScreen ? 'column' : 'row'}>
        <Flex w={isSmallScreen ? '100%' : '40%'} flexDir="column" lineHeight={1.2}>
          <chakra.h1 textAlign={isSmallScreen ? 'center' : 'unset'} fontSize={isSmallScreen ? '26px' : '48px'} color="#042454" fontWeight="bold">CONTROLE A EQUIPE. <br /> MELHORE A GESTÃO.</chakra.h1>
          <chakra.h3 textAlign={isSmallScreen ? 'center' : 'unset'} fontSize={isSmallScreen ? '24px' : '36px'} color="#4d4d4d" fontWeight="bold">Conte com um sistema intuitivo e fácil de usar</chakra.h3>
        </Flex>

        {isSmallScreen ? <AnimationTxt /> : <SecTwoList />}
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
        <Text fontSize="14px" textAlign="center" mt="0.5em">* Teste gratuito de 7 dias</Text>
      </Flex>
      <Flex mt="2.5em" w="90%">
        <Flex w="100%" justifyContent="center" bgImage="/images/picture1.svg" mr="1em" bgSize="100%" bgPos="center" bgRepeat="no-repeat" h="600px">
          <Text fontSize="30px" textAlign="center" fontWeight="bold" w="50%" mt="5%" color="#042454">TODOS OS DEPARTAMENTOS DA SUA EMPRESA CONECTADOS</Text>
        </Flex>
        <Flex w="100%" justifyContent="center" bgImage="/images/picture2.svg" bgSize="100%" bgPos="center" bgRepeat="no-repeat" h="600px">
          <Text fontSize="30px" textAlign="center" fontWeight="bold" w="50%" mt="5%" color="#fff">TREINAMENTO COMPLETO E SUPORTE 24h</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionTwo;
