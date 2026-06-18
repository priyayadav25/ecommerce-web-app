import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Product Catalog</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Register() {
  return <h2>Register Page</h2>;
}

function Cart() {
  return <h2>Cart Page</h2>;
}

function Checkout() {
  return <h2>Checkout Page</h2>;
}

function Orders() {
  return <h2>Orders Page</h2>;
}

function AdminDashboard() {
  return <h2>Admin Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
