import React from 'react'
import Navbar from '../src/Component/Navbar/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom' 
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element ={<Shop />}  />
          <Route path='/loginsignup' element ={<LoginSignup />}  />
          <Route path='/cart' element ={<Cart />}  />
          <Route path='/mens' element ={<ShopCategory  category = "mens"/>} />
          <Route path='/womens' element ={<ShopCategory category = "womens"/>}  />
          <Route path='/kids' element ={<ShopCategory category = "kids"/>}  />
          <Route path='/product' element ={<Product /> }/>
          <Route path=':product' element ={<Product /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App