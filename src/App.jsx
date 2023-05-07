import './App.css'
import About from './components/About us/About';
import AddCategory from './components/Admin/AddItems/AddCategory';
import AddProducts from './components/Admin/AddItems/AddProducts';
import AddType from './components/Admin/AddItems/AddType';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact us/Contact';
import { useUserContext } from './components/Context/useUserContext';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Purchase from './components/Products/Purchase';
import ProductsList from './components/Products/Types/ProductsList/ProductsList';
import Types from './components/Products/Types/Types';
import Signup from './components/Signup/Signup';
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const {user} = useUserContext();
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {!user && <Route path='/login' element={<Login/>}></Route>}
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/types/:category' element={<Types/>}></Route>
          <Route path='/productslist/:type' element={<ProductsList/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/addcategory' element={<AddCategory/>}></Route>
          <Route path='/admin/addtype' element={<AddType/>}></Route>
          <Route path='/admin/addproduct' element={<AddProducts/>}></Route>
          <Route path='/purchase' element={<Purchase/>}></Route>
          <Route path="*" element={<Home/>}></Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
