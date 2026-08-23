import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import Dashboard from './pages/dashboard'
import Order from './pages/order'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
