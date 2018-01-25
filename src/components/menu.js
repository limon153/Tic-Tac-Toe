import React from 'react';
import Button from 'material-ui/Button/Button';
import styled from 'react-emotion';

const Container = styled.div`
  text-align: center;
`

const Menu = () => (
  <Container>
    <h2>Choose Game Mode</h2>
    <Button>Single</Button>
    <Button>Multiplayer</Button>
  </Container>
);

export default Menu;