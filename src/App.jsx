import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App