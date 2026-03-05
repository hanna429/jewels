import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Components/Pages/Home'
import CustomNavbar from './Components/sharedComonent/Navbar'
import ShopPage from './Components/Shop/ShopPage'
import Footer from './Components/sharedComonent/Footer'
import RingPage from './Components/Shop/RingPage'
import NecklacePage from './Components/Shop/Neclacepage'
import EarringsPage from './Components/Shop/EaeingPage'
import BraceletPage from './Components/Shop/BraceletPage'

function App() {

  return (
    <BrowserRouter>

      <CustomNavbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/ring" element={<RingPage/>}/>
        <Route path='/necklace' element={<NecklacePage/>}/>
        <Route path='/earings' element={<EarringsPage/>}/>
        <Route path='/bracelets' element={<BraceletPage/>}/>



      </Routes>
<Footer/>
    </BrowserRouter>
  )
}

export default App