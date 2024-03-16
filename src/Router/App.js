import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../component/Header/Header';
import './App.scss';
import Navbar from '../component/Navbar/Navbar';
import Home from '../Page/Home/Home';
import Footer from '../component/Footer/Footer';
import Login from '../Page/Login/Login';
import Register from '../Page/Register/Register';
import ProductLayout from '../Page/ProductLayout/ProductLayout';
import products from '../assets/dataTest/product';

function App() {
  const jeansFilter = products.filter((product) => product.type.toLowerCase() === "jeans");
  const shirtFilter = products.filter((product) => product.type.toLowerCase() === "shirt");
  const jacketFilter = products.filter((product) => product.type.toLowerCase() === "jacket");
  const collectionsFilter = products.filter((product) => product.type.toLowerCase() === "polo");
  const bestSellerFilter = products.filter((product) => product.type.toLowerCase() === "polo");

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/Flexgy" element={<Home />} />
        <Route path="/Flexgy/product" element={6} />
        <Route path="/Flexgy/login" element={<Login />} />
        <Route path="/Flexgy/register" element={<Register />} />
        <Route path="/Flexgy/new" element={<ProductLayout products={products} />} />
        <Route path="/Flexgy/bestsellers" element={<ProductLayout products={bestSellerFilter} />} />
        <Route path="/Flexgy/jeans" element={<ProductLayout products={jeansFilter} />} />
        <Route path="/Flexgy/shirt" element={<ProductLayout products={shirtFilter} />} />
        <Route path="/Flexgy/jacket" element={<ProductLayout products={jacketFilter} />} />
        <Route path="/Flexgy/cloting-accessories" element={<ProductLayout products={products} />} />
        <Route path="/Flexgy/collections" element={<ProductLayout products={collectionsFilter} />} />
        <Route path="/Flexgy/sale" element={<ProductLayout products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
