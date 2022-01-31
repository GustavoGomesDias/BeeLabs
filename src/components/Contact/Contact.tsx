import React from 'react';
import {
  chakra, Flex, Grid,
} from '@chakra-ui/react';
import {
  FaWhatsapp, FaFacebookSquare, FaInstagramSquare,
} from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import ContactIcons from './ContactIcons';

const Contact = (): JSX.Element => {
  return (
    <Flex w="full" bg="#042454" py="2em" justifyContent="center" alignItems="center" my="2em" flexDir="column">
      <chakra.h2 color="#fff" fontSize="36px" fontWeight="bold">O CRM IDEAL PARA TODAS AS PLATAFORMAS</chakra.h2>
      <Grid templateColumns="repeat(5, 0.7fr)">
        <ContactIcons Icon={FaWhatsapp} text="WhatsApp" border={false} />
        <ContactIcons Icon={FaFacebookSquare} text="Facebook Menssager" border />
        <ContactIcons Icon={FiMail} text="E-mail" border />
        <ContactIcons Icon={FaInstagramSquare} text="Instagram Direct" border />
        <ContactIcons Icon={FiPhoneCall} text="Telefone" border />
      </Grid>
    </Flex>
  );
};

export default Contact;