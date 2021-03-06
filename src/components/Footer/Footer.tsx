import React from 'react';
import {
  Flex, Image, Text, Grid, Link, useMediaQuery,
} from '@chakra-ui/react';
import {
  FaWhatsapp, FaFacebookSquare, FaInstagramSquare,
} from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  const mediasSize: string = isSmallScreen ? '20px' : '40px';
  const linkSize: string = isSmallScreen ? '12px' : '16px';

  return (
    <Flex w="full" flexDir="column" mt="3em">
      <Flex alignItems="center" justifyContent="center">
        <Text textAlign="center" fontWeight="bold" color="#888888" mr="5px">Uma empresa</Text>
        <Image w="10%" src="/images/beelabs.svg" alt="Bee CMR logo" />
      </Flex>
      <Flex py="2em" w="full" bg="#042454" alignItems="center" flexDir="column">
        <Flex
          w="100%"
          py="2em"
          px={isSmallScreen ? '2em' : '8em'}
          flexDir={isSmallScreen ? 'column' : 'row'}
          alignItems={isSmallScreen ? 'center' : 'unset'}
        >
          <Image w={isSmallScreen ? '50%' : '30%'} src="/images/footer-logo.svg" alt="Bee CMR logo" />
          <Grid
            templateColumns="repeat(5, 0.7fr)"
            alignItems="center"
            gap={2}
            display="flex"
            w="full"
            justifyContent={isSmallScreen ? 'center' : 'flex-end'}
            mt={isSmallScreen ? '5px' : '0px'}
          >
            <Link href="/"><FaWhatsapp color="#fff" size={mediasSize} /></Link>
            <Link href="/"><FaFacebookSquare color="#fff" size={mediasSize} /></Link>
            <Link href="/"><FiMail color="#fff" size={mediasSize} /></Link>
            <Link href="/"><FaInstagramSquare color="#fff" size={mediasSize} /></Link>
            <Link href="/"><FiPhoneCall color="#fff" size={mediasSize} /></Link>
          </Grid>
        </Flex>
        <Flex justifyContent="center" mb="2px">
          <Link href="/" color="#fff" fontSize={linkSize} textAlign="center">Termos de serviço</Link>
          <Link href="/" color="#fff" fontSize={linkSize} textAlign="center" mx="15px">Políticas de Privacidade</Link>
          <Link href="/" color="#fff" fontSize={linkSize} textAlign="center">Gerenciar cookies</Link>
        </Flex>
        <Text color="#fff" fontSize="12px" textAlign="center">Copyright © 2022 Bee crm. Todos os direitos reservados. {isSmallScreen && <br />}Feito por <Link href="https://www.artcom.com.br" isExternal color="#fff" textDecor="underline">Artcom</Link></Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
