import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import './App.css'
import Register from './pages/Register/Register';
import Reset from './pages/Reset/Reset';
import Dashboard from './pages/Dashboard/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}