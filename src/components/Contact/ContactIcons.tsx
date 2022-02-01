import React from 'react';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface ContactIconsProps {
  Icon: IconType
  text: string
  border: boolean
}
const ContactIcons = ({ Icon, border, text }: ContactIconsProps): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex flexDir={isSmallScreen ? 'unset' : 'column'} alignItems="center" p={isSmallScreen ? '0.5em' : '1em'} borderLeft={border ? '2px solid #34b4ac' : 'none'} w="100%">
      <Icon color="#34b4ac" size={isSmallScreen ? '26px' : '45px'} />
      <Text ml={isSmallScreen ? '15px' : 'unset'} color="#fff" w="full" textAlign={isSmallScreen ? 'unset' : 'center'} mt="5px" fontSize={isSmallScreen ? '16px' : ''}>{text}</Text>
    </Flex>
  );
};

export default ContactIcons;
