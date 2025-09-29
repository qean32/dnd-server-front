import ReactDOM from 'react-dom/client'
import './style/core.scss'
import './style/app.css'
import { Router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Router />
  // </React.StrictMode>,
)
