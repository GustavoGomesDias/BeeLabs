import React from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import classes from './Product.module.css';

const SecTwoList = (): JSX.Element => {
  return (
    <UnorderedList mr="0.5em" fontSize="24px" w="40%" className={classes.listMarker} listStyleImage="url(/images/bullet.svg)">
      <ListItem fontSize="50px" lineHeight={0.8}>
        <span className={classes.listSpan}>
          <span style={{ fontWeight: 'bold', color: 'black' }}>Automatize</span> tarefas cotidianas
        </span>
      </ListItem>
      <ListItem fontSize="50px" lineHeight={0.8}>
        <span className={classes.listSpan}>
          Crie e organize <span style={{ fontWeight: 'bold', color: 'black' }}>módulos</span> com facilidade
        </span>
      </ListItem>
      <ListItem fontSize="50px" lineHeight={0.8}>
        <span className={classes.listSpan}>
          Configure as etapas do <span style={{ fontWeight: 'bold', color: 'black' }}>funil de vendas</span>
        </span>
      </ListItem>
      <ListItem fontSize="50px" lineHeight={0.8}>
        <span className={classes.listSpan}>
          Comunicação <span style={{ fontWeight: 'bold', color: 'black' }}>rastreada</span>
        </span>
      </ListItem>
      <ListItem fontSize="50px" lineHeight={0.8}>
        <span className={classes.listSpan}>
          Acompanhe o progresso de vendas <span style={{ fontWeight: 'bold', color: 'black' }}>em tempo real</span>
        </span>
      </ListItem>
    </UnorderedList>
  );
};

export default SecTwoList;
