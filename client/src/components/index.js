// import WishList from "./Wishlist";
import ProtectedRoute from "./shop/auth/ProtectedRoute";
import AdminProtectedRoute from "./shop/auth/AdminProtectedRoute";
import CartProtectedRoute from "./shop/auth/CartProtectedRoute";
import { LayoutContext } from "./shop/layout";
import { layoutState, layoutReducer } from "./shop/layout/layoutContext";
import { isAdmin, isAuthenticate } from "./shop/auth/fetchApi";
import PageNotFound from "./shop/layout/PageNotFound";
import ProductDetails from "./shop/productDetails";
import ProductByCategory from "./shop/home/ProductByCategory";
import CheckoutPage from "./shop/order/CheckoutPage";

export {
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  LayoutContext,
  layoutState,
  layoutReducer,
  isAdmin,
  isAuthenticate,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
};
