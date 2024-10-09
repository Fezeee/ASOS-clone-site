import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Men from './pages/Men';
import Women from './pages/Women';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Collection from './pages/Collection';
import Product from './pages/Product';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/product/:id' element={<Product/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
