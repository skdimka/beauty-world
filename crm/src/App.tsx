// import React, { useContext } from 'react';
import './App.css';
import BasicTabs from './tabPanel';
import { StyledEngineProvider } from '@mui/material/styles';
import AppBar from './AppBar';
import { AuthForm } from './components/AuthForm';
// import { AuthData } from './common/interfaces/AuthData';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import customersApi from './common/api/CustomersApi';


function App() {
  const {isLoggedIn, login, logout } = useAuth();

  useEffect(()=>{
    
  }, []);

  const loadCustomers = () => {customersApi.getAll(); }

  if (!isLoggedIn){
    return  <AuthForm onLogin={login}/>;
  }

  return (
    <>
    <header>
    <AppBar />
    <button onClick={logout}>Logout</button>
    </header>

    <main> 
      <button onClick={loadCustomers}>Load Customers</button>
    <div className="App">
          <StyledEngineProvider injectFirst>
      
    </StyledEngineProvider>
      <BasicTabs/>
    </div>
    </main>
    </>
  );
}

export default App;
