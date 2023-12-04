import React, {useEffect} from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import './App.css';
import AppBar from './AppBar';
import customersApi from './common/api/CustomersApi';
import { useAuth } from './context/AuthContext';


function App() {
  const {isLoggedIn, logout, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    customersApi.getAll();
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
    </main>
    </>
  );
}

export default App;
