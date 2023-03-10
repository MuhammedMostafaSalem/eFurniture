import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Utility/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Footer from './components/Utility/Footer/Footer';
import ProductsDetailsPage from './pages/productDetails/ProductsDetailsPage';
import CartPage from "./pages/Cart/CartPage";
import CheckOutPage from "./pages/CheckOut/CheckOutPage";
import Login from "./pages/Auth/LoginPage";
import Signup from "./pages/Auth/SignupPage";
import ProtectedRoute from "./Router/ProtectedRoute";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductsDetailsPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='checkout' element={<ProtectedRoute>
            <CheckOutPage/>
          </ProtectedRoute> }/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
