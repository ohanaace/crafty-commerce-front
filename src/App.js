import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
export { apiUrl };
