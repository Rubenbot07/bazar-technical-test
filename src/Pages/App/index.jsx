import { Home } from '../Home'
import { Results } from '../Results'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../App.css'
import { ProductDetail } from '../ProductDetail'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/items', element: <Results /> },
    { path: '/item/:id', element: <ProductDetail /> }
  ])
  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
