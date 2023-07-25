import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Container from './components/Container/Container.js';
import Checkout from './components/Checkout/Checkout.js';
import Cart from './components/Cart/Cart.js';
import FormUser from './components/FormUser/FormUser.js';
import Login from './components/Login/Login.js';
import ProductForm from './components/Admin/Products/ProductForm.jsx';
import { useUserContext } from './services/contextServices.js';
import Layout from './components/Layout/index.jsx';


function App() {
  const { user } = useUserContext()

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/categoria/:category' element={<Container />} />
        <Route path='/product/:productId' element={<Container />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<FormUser />} />
        <Route path='/services'>
          <Route path=':service' element={<Container />} />
          <Route path='new' element={<ProductForm />} />
        </Route>
        <Route path='/services/products/:productId' element={<Container />} />
        <Route path='/services/users/:idUser' element={<FormUser userOld={user} update={true} />} />
        <Route path='*' element={<h1>Page not Found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
