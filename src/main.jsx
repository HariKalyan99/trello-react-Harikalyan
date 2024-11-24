import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TrelloDashboard from './components/TrelloDashboard.jsx';
import TrelloBoardsPage from './components/TrelloBoardsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {path: "/", element: <TrelloDashboard />},
      {path: "/boards/:id", element: <TrelloBoardsPage />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
