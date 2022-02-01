import React from 'react';
import {
  Flex, Image, Text, Grid, Link,
} from '@chakra-ui/react';
import {
  FaWhatsapp, FaFacebookSquare, FaInstagramSquare,
} from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Footer = (): JSX.Element => {
  return (
    <Flex w="full" flexDir="column" mt="3em">
      <Flex alignItems="center" justifyContent="center">
        <Text textAlign="center" fontWeight="bold" color="#888888" mr="5px">Uma empresa</Text>
        <Image w="10%" src="/images/beelabs.svg" alt="Bee CMR logo" />
      </Flex>
      <Flex py="2em" w="full" bg="#042454" alignItems="center" flexDir="column">
        <Flex w="100%" py="2em" px="8em">
          <Image w="30%" src="/images/footer-logo.svg" alt="Bee CMR logo" />
          <Grid templateColumns="repeat(5, 0.7fr)" alignItems="center" gap={2} display="flex" w="full" justifyContent="flex-end">
            <FaWhatsapp color="#fff" size="45px" />
            <FaFacebookSquare color="#fff" size="40px" />
            <FiMail color="#fff" size="40px" />
            <FaInstagramSquare color="#fff" size="40px" />
            <FiPhoneCall color="#fff" size="40px" />
          </Grid>
        </Flex>
        <Flex>
          <Link href="/" color="#fff">Termos de serviço</Link>
          <Link href="/" color="#fff" mx="15px">Políticas de Privacidade</Link>
          <Link href="/" color="#fff">Gerenciar cookies</Link>
        </Flex>
        <Text color="#fff" fontSize="12px">Copyright © 2022 Bee crm. Todos os direitos reservados. Feito por <Link href="https://www.artcom.com.br" isExternal color="#fff">Artcom</Link></Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
