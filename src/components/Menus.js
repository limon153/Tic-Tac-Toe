import React from 'react';

import MenuTemplate from './MenuTemplate';

export const ModeMenu = props => (
  <MenuTemplate
    title="Choose Mode"
    options={['Single', 'Multi']}
    changeMode={props.changeMode}
  />
);

export const PlayerMenu = props => (
  <MenuTemplate
    title="Choose Player"
    options={['X', 'O']}
    changeMode={props.changeMode}
  />
);
