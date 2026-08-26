import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/app-layout'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            {/* Catch-All Route (Since other screens have not been implemented) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
