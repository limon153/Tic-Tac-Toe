import React, {Fragment} from 'react';
import Paper from 'material-ui/Paper';
import styled from 'react-emotion';
import TopMenu from './topMenu';
import Menu from './menu';

const Container = styled(Paper)`
  width: 90vw;
  height: 80vh;
  margin: 50px auto;
  /* background-color: red !important; */
`


const App = () => (
  <Fragment>
    <Container>
      <TopMenu />
      <Menu />
    </Container>
  </Fragment>
);

export default App;