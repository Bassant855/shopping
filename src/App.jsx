
import Navbar from './components/Navbar'
import './App.css'

import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import ProductDetalis from './pages/ProductDetalis'
import CategoryPage from './pages/CategoryPage'

function App() {


  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:categoryPage' element={<CategoryPage/>}/>
      <Route path='/:detalID' element={<ProductDetalis/>} />
    </Routes>

 
    </>
  )
}

export default App
