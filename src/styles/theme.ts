import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        color: '#4d4d4d',
      },
    },
  },
});

export default theme;
