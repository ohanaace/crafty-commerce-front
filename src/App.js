import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import UserProvider from "./contexts/loginContext";
import CheckoutPage from "./pages/CheckoutPage";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
export { apiUrl };
