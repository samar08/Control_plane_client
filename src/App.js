import React from 'react';
import AppbarComponent from './components/AppbarComponent';
import {CssBaseline} from '@material-ui/core';
import Tabspanel from './tabs/Tabspanel'
const App = () => {
  return(
      <>
      <CssBaseline/>
      <AppbarComponent/>
      <Tabspanel/>
      </>
  );
};

export default App;
