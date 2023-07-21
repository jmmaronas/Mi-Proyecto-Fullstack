import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/Items/ItemListContainer.js';
import Checkout from './components/Checkout/Checkout.js';
import Cart from './components/Cart/Cart.js';
import FormUser from './components/FormUser/FormUser.js';
import Login from './components/Login/Login.js';
import ProductForm from './components/Admin/Products/ProductForm.jsx';
import { useUserContext } from './services/contextServices.js';


function App() {
  const {user} =useUserContext()

  return (
    <>    
      <NavBar/>             
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:category' element={<ItemListContainer />} />
        <Route path='/product/:productId' element={<ItemListContainer />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<FormUser/>}/>
        <Route path='/services'>
          <Route path=':service' element={<ItemListContainer/>}/>
          <Route path='new' element={<ProductForm/>}/>
        </Route>
        <Route path='/services/products/:productId' element={<ItemListContainer/>}/>
        <Route path='/services/users/:idUser' element={<FormUser userOld={user} update={true}/>}/>
        <Route path='*' element={<h1>Page not Found!</h1>}/>
      </Routes>      
    </>
  );
}

export default App;
