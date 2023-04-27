import './App.css'
import About from './components/About us/About';
import Admin from './components/Admin/Admin';
import Contact from './components/Contact us/Contact';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
