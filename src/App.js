import Welcome from "./screens/Welcome";
import Products from "./screens/Products";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
