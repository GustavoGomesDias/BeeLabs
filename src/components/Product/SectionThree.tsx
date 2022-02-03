import React from 'react';
import {
  chakra, Flex, Image, UnorderedList, ListItem, Button, Text, useMediaQuery,
} from '@chakra-ui/react';

const SectionThree = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isMdScreen] = useMediaQuery('(max-width: 960px)');

  return (
    <Flex w="full" alignItems="center" flexDir="column">
      <Flex w="full" bg="#34b4ac" flexDir="column">
        <Flex flexDir="column" alignItems="center" w="full" mt="5%" p={0.5}>
          <chakra.h1 textAlign={isSmallScreen || isMdScreen ? 'center' : 'unset'} fontSize={isSmallScreen ? '26px' : '48px'} fontWeight="bold" color="#042454">ANÁLISES INTELIGENTEMENTE SIMPLES</chakra.h1>
          <chakra.h3 textAlign={isSmallScreen || isMdScreen ? 'center' : 'unset'} fontSize={isSmallScreen ? '24px' : '28px'} color="#fff">Um app que vive trabalhando {isSmallScreen && <br />} para você vender mais</chakra.h3>
        </Flex>
        <Flex w="full" justifyContent="center" alignItems="center" flexDir={isSmallScreen ? 'column' : 'row'}>
          <Image src="/images/secThree.svg" about="Spreadsheet representation" w={isSmallScreen ? '90%' : '40%'} />
          <UnorderedList py={2} fontSize="20px" w={isSmallScreen ? '80%' : '40%'} spacing={3} color="#fff" display="flex" flexDir="column" justifyContent="center">
            <ListItem><span style={{ fontWeight: 'bold', color: 'black' }}>Relatórios</span> completos da atividade</ListItem>
            <ListItem><span style={{ fontWeight: 'bold', color: 'black' }}>Métricas</span> de desempenho</ListItem>
            <ListItem>Análise de <span style={{ fontWeight: 'bold', color: 'black' }}>tendências</span> (fale com a pessoa certa na hora certa)</ListItem>
            <ListItem>Comunicação <span style={{ fontWeight: 'bold', color: 'black' }}>rastreada</span></ListItem>
            <ListItem>Insights para <span style={{ fontWeight: 'bold', color: 'black' }}>novas ações de vendas</span></ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
      <Button
        size={isSmallScreen ? 'md' : 'lg'}
        borderRadius="0px"
        fontWeight="medium"
        px="2em"
        bg="#042454"
        color="#fff"
        _hover={{
          bg: '#031e47',
        }}
        mt="20px"
      >
        <Text>
          QUERO CONHECER AGORA<br />
          Entre em contato
        </Text>
      </Button>
      <Text fontSize="14px" fontWeight="bold" textAlign="center" mt="0.5em">* Teste gratuito de 7 dias</Text>
    </Flex>
  );
};

export default SectionThree;
