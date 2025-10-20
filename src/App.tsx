import ReactDOM from 'react-dom/client'
import './style/core.scss'
import './style/app.css'
import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { QueryClientProvider, QueryClient } from 'react-query'
import { MainLoader } from './component/general'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={new QueryClient()}>
    <Provider store={store} >
      <MainLoader />
      <Router />
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>,
)
