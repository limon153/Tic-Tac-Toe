import React from 'react';

import MenuTemplate from './MenuTemplate';

export const ModeMenu = props => (
  <MenuTemplate
    title="Choose mode"
    options={['Single', 'Multi']}
    changeMode={props.changeMode()}
  />
);

export const PlayerMenu = props => (
  <MenuTemplate
    title="Choose player"
    options={['X', 'O']}
    changeMode={props.changeMode()}
  />
);
