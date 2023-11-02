import React from 'react';
import './App.css';
import BasicTabs from './tabPanel';
import { StyledEngineProvider } from '@mui/material/styles';
import AppBar from './AppBar';


function App() {
  return (
    <div className="App">
          <StyledEngineProvider injectFirst>
      <AppBar />
    </StyledEngineProvider>
      <BasicTabs/>
  
    </div>
  );
}

export default App;
