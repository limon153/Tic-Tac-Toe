import React, {Fragment} from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Container = styled(Paper)`
  width: 90vw;
  height: 80vh;
  margin: 50px auto;
  background-color: red !important;
`

const App = () => (
  <Fragment>
    <Container>
    </Container>
  </Fragment>
);

export default App;