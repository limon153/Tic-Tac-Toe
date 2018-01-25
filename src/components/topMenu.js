import React from "react";
import Button from "material-ui/Button/Button";
import styled from 'react-emotion';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`

const Statistic = styled.div`
  display: inline-block;
  padding: 20px;
`

const TopMenuButton = styled(Button)`
  margin: 20px;
`

const TopMenu = () => (
  <Container>
    <Statistic>
      <span>Player 1 : </span><br/>
      <span>Player 2 : </span>
    </Statistic>
    <TopMenuButton color="primary" raised>Reset</TopMenuButton>
  </Container>
);

export default TopMenu;