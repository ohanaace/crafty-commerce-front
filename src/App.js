import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import UserProvider from "./contexts/loginContext";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchProvider from "./contexts/searchContext";
import ProductPage from "./pages/ProductPage";


const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products/:type" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </SearchProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
export { apiUrl };
