import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';

export interface CircleProps {
  borderRadius: string
  width: string
}

const Circle = ({ borderRadius, width }: CircleProps) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  return (
    <span style={{
      borderRadius,
      display: 'block',
      height: isSmallScreen ? '20px' : width,
      width,
      background: '#fff',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: '10px',
      marginLeft: '10px',
    }}
    />
  );
};

export default Circle;
