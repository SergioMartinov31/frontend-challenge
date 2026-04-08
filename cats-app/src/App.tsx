import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/providers/store/store'
import { AppRouter } from '@/app/providers/router/AppRouter'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </Provider>
  )
}

export default App
