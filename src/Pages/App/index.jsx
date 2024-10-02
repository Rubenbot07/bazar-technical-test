import { Home } from '../Home'
import { Results } from '../Results'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../App.css'
import { ProductDetail } from '../ProductDetail'
import ProductList from '../../products.json'

const products = ProductList

console.log(products.products)
const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/items', element: <Results productList={products.products} /> },
    { path: '/items/:id', element: <ProductDetail ProductList={ProductList} /> }
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
