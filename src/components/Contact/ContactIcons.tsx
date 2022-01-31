import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface ContactIconsProps {
  Icon: IconType
  text: string
  border: boolean
}
const ContactIcons = ({ Icon, border, text }: ContactIconsProps): JSX.Element => {
  return (
    <Flex flexDir="column" alignItems="center" p="2em" borderLeft={border ? '2px solid #34b4ac' : 'none'} w="100%">
      <Icon color="#34b4ac" size="45px" />
      <Text color="#fff" w="full" textAlign="center" mt="5px">{text}</Text>
    </Flex>
  );
};

export default ContactIcons;
