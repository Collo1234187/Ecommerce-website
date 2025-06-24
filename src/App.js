
import './App.css';
import {Navbar}   from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Shop} from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Cart} from './Pages/Cart';
import {Product} from './Pages/Product';
import {LoginSignup} from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import bed_banner from './Components/Assets/bed_banner.jpg'
import pillow_banner from './Components/Assets/pillows_banner.jpg'
import stand_banner from './Components/Assets/stand_banner.jpg'
import chair_banner from './Components/Assets/chair_banner.jpg'
import sofa_banner from './Components/Assets/sofa_banner.jpg'
import table_banner from './Components/Assets/table_banner.jpg'
import dining_banner from './Components/Assets/dining_banner.jpg'
import mattress_banner from './Components/Assets/mattress_banner.jpg'

function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/bed' element={<ShopCategory banner={bed_banner} category="bed"/>}/>
        <Route path='/sofa' element={<ShopCategory banner={sofa_banner} category="sofa"/>}/>
        <Route path='/stand' element={<ShopCategory banner={stand_banner} category="stand"/>}/>
        <Route path='/dining' element={<ShopCategory banner={dining_banner}category="dining"/>}/>
        <Route path='/table' element={<ShopCategory banner={table_banner} category="table"/>}/>
        <Route path='/chair' element={<ShopCategory banner={chair_banner} category="chair"/>}/>
        <Route path='/mattress' element={<ShopCategory banner={mattress_banner} category="mattress"/>}/>
        <Route path='/pillow' element={<ShopCategory banner={pillow_banner} category="pillow"/>}/>
        <Route path="/product/:productId" element={<Product />} />
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
