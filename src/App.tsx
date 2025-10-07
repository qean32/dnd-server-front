import ReactDOM from 'react-dom/client'
import './style/core.scss'
import './style/app.css'
import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store} >
    <Router />
  </Provider>
  // </React.StrictMode>,
)
