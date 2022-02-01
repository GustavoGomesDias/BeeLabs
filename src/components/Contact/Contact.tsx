import React from 'react';
import {
  chakra, Flex, Grid, useMediaQuery,
} from '@chakra-ui/react';
import {
  FaWhatsapp, FaFacebookSquare, FaInstagramSquare,
} from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import ContactIcons from './ContactIcons';

const Contact = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex w="full" bg="#042454" py="2em" justifyContent="center" alignItems="center" my="2em" flexDir="column">
      <chakra.h2 color="#fff" fontSize={isSmallScreen ? '26px' : '36px'} fontWeight="bold" textAlign={isSmallScreen ? 'center' : 'unset'}>O CRM IDEAL PARA TODAS AS PLATAFORMAS</chakra.h2>
      <Grid
        mt="5px"
        templateColumns={isSmallScreen ? '' : 'repeat(5, 0.7fr)'}
        templateRows={isSmallScreen ? 'repeat(5, 0.7fr)' : ''}
      >
        <ContactIcons Icon={FaWhatsapp} text="WhatsApp" border={!!isSmallScreen} />
        <ContactIcons Icon={FaFacebookSquare} text="Facebook Menssager" border />
        <ContactIcons Icon={FiMail} text="E-mail" border />
        <ContactIcons Icon={FaInstagramSquare} text="Instagram Direct" border />
        <ContactIcons Icon={FiPhoneCall} text="Telefone" border />
      </Grid>
    </Flex>
  );
};

export default Contact;
