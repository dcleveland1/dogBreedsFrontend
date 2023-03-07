import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import { store } from './store'
import { Provider } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css';

const Login = React.lazy(() => import("./pages/Login"));
const Home3 = React.lazy(() => import("./pages/Home"));
const Register = React.lazy(() => import("./pages/Register"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="Register"
          element={
            <React.Suspense fallback={<>...</>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </div>
  )
}

function Home2() {
  return (
    <div>
      <h2>Home2</h2>
    </div>
  );
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App
