import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar/navbar.jsx'
import Table from './pages/table/table.jsx'
import Fixtures from './pages/fixtures/fixtures.jsx'
import Results from './pages/results/results.jsx'
import Clubs from './pages/clubs/clubs.jsx'

const router = createBrowserRouter([
  {
    path: '/SPLWeb/',
    element: <App />,
  },
  {
    path: '/SPLWeb/table',
    element: <Table />
  },
  {
    path: '/SPLWeb/fixtures',
    element: <Fixtures />
  },
  {
    path: '/SPLWeb/results',
    element: <Results />
  },
  {
    path: '/SPLWeb/clubs',
    element: <Clubs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
