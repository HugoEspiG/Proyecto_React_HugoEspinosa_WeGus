import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Outfits from './pages/Outfits';
import Details from './pages/Details';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/About-us' element={<About></About>}/>
        <Route path='/Outfits/:categoy/:id' element={<Details/>}/>
        <Route path='/Outfits/:category' element={<Outfits/>}/>
        <Route path='/Outfits' element={<Outfits/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;