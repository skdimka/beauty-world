import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App/>}>
              <Route index element={<OrdersPage/>}/>
              <Route path='employees' element={<EmployeesPage/>}/>

          </Route>

          <Route path='/login' element={<LoginPage/>}>

          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
