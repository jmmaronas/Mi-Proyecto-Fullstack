import { Route, Routes } from 'react-router-dom';
import { links } from './services/services.js';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/Items/ItemListContainer.js';
import Checkout from './components/Checkout/Checkout.js';
import Cart from './components/Cart/Cart.js';
import FormUser from './components/FormUser/FormUser.js';
import Login from './components/Login/Login.js';



function App() {
  return (
    <>    
      <NavBar links={links} />             
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:busqueda' element={<ItemListContainer />} />
        <Route path='/product/:productId' element={<ItemListContainer />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<FormUser/>}/>
        <Route path='*' element={<h1>Page not Found!</h1>}/>
      </Routes>      
    </>
  );
}

export default App;
