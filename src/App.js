import './App.css';
import NavBar from './Components/NavBAR/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory   category="men"/>}/>
              <Route path='/womens' element={<ShopCategory  category="women"/>}/>
              <Route path='/kids' element={<ShopCategory   category="kid"/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
              <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
             </Routes>
             <Footer/>
              </BrowserRouter>
  
    </div>
  )
  
}

export default App;
