import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {trelloStore} from './store/trelloStore.js'
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <Provider store={trelloStore}>
      <App />
    </Provider>
  </StrictMode>,
)
