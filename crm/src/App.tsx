import React, {useEffect} from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import './App.css';
// import BasicTabs from './tabPanel';
import AppBar from './AppBar';
import { useAuth } from './context/AuthContext';


function App() {
  const {isLoggedIn, logout, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth()
  }, []);

  if(!isLoggedIn) {
    return <Navigate to="./login"/>
  }

  return (
    <>
      <header>
        <AppBar />
      <nav>
        <ul>
          <li><Link to="/">Заявки</Link></li>
          <li><Link to="/employees">Сотрудники</Link></li>
        </ul>
      </nav>

        <button onClick={logout}>Logout</button>
      </header>

    <main> 
      <Outlet/>

      {/*
       <div className="App">
          <StyledEngineProvider injectFirst>
          </StyledEngineProvider>
           <BasicTabs/>
        </div> */}
    </main>
    </>
  );
}

export default App;
