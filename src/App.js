import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopingCart from './components/pages/shop/Shop';
import CartThings from './components/pages/cart/Cart';
import NavigationBar from './components/Navbar/Navbar';
import { ShopContextProvider } from './components/Context/ShopContext';
function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<ShopingCart />} />
          <Route path='/cart' element={<CartThings />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}
export default App;