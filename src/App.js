import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import UserProvider from "./contexts/loginContext";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
export { apiUrl };
