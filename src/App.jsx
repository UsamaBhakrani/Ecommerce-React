import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  CartPage,
  CheckOutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductPage,
  SingleProductPage,
  AuthWrapper,
} from "./pages";

import { NavBar, SideBar, Footer } from "./components";

const App = () => {
  return (
    <AuthWrapper>
      <NavBar />
      <SideBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route
          path="checkout"
          element={<PrivateRoute component={CheckOutPage} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </AuthWrapper>
  );
};

export default App;
