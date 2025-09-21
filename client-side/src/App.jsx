
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import CategoryCollection from './pages/CategoryCollection'
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders';
import PlaceOrder from './pages/PlaceOrder'

function App() {
  

  return (
    <main className='overflow-hidden text-tertiary'>
    <Header></Header>
    <Routes>
     <Route path='/' element={<Home></Home>} > </Route>
     <Route path='/collection' element={<Collection></Collection>} > </Route>
     <Route path='/collection/:category' element={<CategoryCollection></CategoryCollection>} > </Route>
      <Route path='/collection/:category/:id' element={<ProductDetails></ProductDetails>} > </Route>
      <Route path='/testimonial' element={<Testimonial></Testimonial>} > </Route>
      <Route path='/contact' element={<Contact></Contact>} > </Route>
      <Route path='/cart' element={<Cart></Cart>} > </Route>
      <Route path='/place-order' element={<PlaceOrder></PlaceOrder>} > </Route>
      <Route path='/my-orders' element={<MyOrders></MyOrders>} > </Route>
    </Routes>

    <Footer></Footer>

    </main>
  )
}

export default App
