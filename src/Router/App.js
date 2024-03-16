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
        <Route path="/" element={<Home />} />
        <Route path="/product" element={6} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new" element={<ProductLayout products={products} />} />
        <Route path="/bestsellers" element={<ProductLayout products={bestSellerFilter} />} />
        <Route path="/jeans" element={<ProductLayout products={jeansFilter} />} />
        <Route path="/shirt" element={<ProductLayout products={shirtFilter} />} />
        <Route path="/jacket" element={<ProductLayout products={jacketFilter} />} />
        <Route path="/cloting-accessories" element={<ProductLayout products={products} />} />
        <Route path="/collections" element={<ProductLayout products={collectionsFilter} />} />
        <Route path="/sale" element={<ProductLayout products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
