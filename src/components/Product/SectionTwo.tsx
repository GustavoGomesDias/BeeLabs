import {
  Button,
  chakra, Flex, Text, useMediaQuery, ListItem, UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

import classes from './Product.module.css';

const SectionTwo = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex w="full" justifyContent="center" p="2em" flexDir="column" alignItems="center">
      <Flex w="90%" justifyContent="center" flexDir={isSmallScreen ? 'column' : 'row'}>
        <Flex w="40%" flexDir="column">
          <chakra.h1 fontSize="48px" color="#042454" fontWeight="bold">CONTROLE A EQUIPE. <br /> MELHORE A GESTÃO.</chakra.h1>
          <chakra.h3 fontSize="36px" color="#4d4d4d" fontWeight="bold">Conte com um sistema intuitivo e fácil de usar</chakra.h3>
        </Flex>

        <UnorderedList fontSize="24px" w="40%" className={classes.listMarker} listStyleImage="url(/images/bullet.svg)">
          <ListItem fontSize="50px">
            <span className={classes.listSpan}>
              <span style={{ fontWeight: 'bold', color: 'black' }}>Automatize</span> tarefas cotidianas
            </span>
          </ListItem>
          <ListItem fontSize="50px">
            <span className={classes.listSpan}>
              Crie e organize <span style={{ fontWeight: 'bold', color: 'black' }}>módulos</span> com facilidade
            </span>
          </ListItem>
          <ListItem fontSize="50px">
            <span className={classes.listSpan}>
              Configure as etapas do <span style={{ fontWeight: 'bold', color: 'black' }}>funil de vendas</span>
            </span>
          </ListItem>
          <ListItem fontSize="50px">
            <span className={classes.listSpan}>
              Comunicação <span style={{ fontWeight: 'bold', color: 'black' }}>rastreada</span>
            </span>
          </ListItem>
          <ListItem fontSize="50px" lineHeight={1}>
            <span className={classes.listSpan}>
              Acompanhe o progresso de vendas <span style={{ fontWeight: 'bold', color: 'black' }}>em tempo real</span>
            </span>
          </ListItem>
        </UnorderedList>
        {/* <p className={classes.mobile} /> */}
      </Flex>
      <Flex flexDir="column" my="2.5em">
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
          TENHO INTERESSE
        </Button>
        <Text fontSize="14px" textAlign="center" mt="0.5em">* Teste gratuito de 7 dias</Text>
      </Flex>
      <Flex mt="2.5em" w="90%">
        <Flex w="100%" justifyContent="center" bgImage="/images/picture1.svg" mr="1em" bgSize="100%" bgPos="center" bgRepeat="no-repeat" h="600px">
          <Text fontSize="30px" textAlign="center" w="50%" mt="5%" color="#042454">TODOS OS DEPARTAMENTOS DA SUA EMPRESA CONECTADOS</Text>
        </Flex>
        <Flex w="100%" justifyContent="center" bgImage="/images/picture2.svg" bgSize="100%" bgPos="center" bgRepeat="no-repeat" h="600px">
          <Text fontSize="30px" textAlign="center" w="50%" mt="5%" color="#fff">TREINAMENTO COMPLETO E SUPORTE 24h</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionTwo;
