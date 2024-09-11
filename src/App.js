import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar'
import Shop from './Pages/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Card/Cart';
import Category from './Pages/Category/Category';
import About from './Pages/AboutUs/About';
import FAQ from './Pages/FAQ/FAQ';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import User from './Pages/User/User';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/AboutUs' element={<About />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />

          <Route path='/Cart' element={<Cart />} />
          <Route path='/User' element={<User />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
