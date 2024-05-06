import './App.css';
import Header from "./component/layout/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from 'webfontloader';
import React from 'react';
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx"
import Products from "./component/Product/Products.jsx"
import Search from "./component/Product/Search.jsx"
import LoginSignUp from './component/User/LoginSignUp.jsx';
import Profile from './component/User/Profile.jsx';
import store from "./store.jsx"
import { loadUser } from './actions/userAction.jsx';
import UserOptions from "./component/layout/Header/UserOptions.jsx"
import { useSelector } from 'react-redux';
import PrivateRoute from './component/Route/ProtectedRoute.jsx';
import PrivateRouteAdmin from './component/Route/ProtectedRouteAdmin.jsx';
import UpdateProfile from './component/User/UpdateProfile.jsx';
import UpdatePassword from './component/User/UpdatePassword.jsx';
import ForgotPassword from './component/User/ForgotPassword.jsx';
import ResetPassword from './component/User/ResetPassword.jsx';
import Cart from "./component/Cart/Cart.jsx"
import Shipping from './component/Cart/Shipping.jsx';
import ConfirmOrder from './component/Cart/ConfirmOrder.jsx';
import MyOrders from './component/Order/MyOrders.jsx';


import PaymentGuard from './component/Route/PaymentGuard.jsx';
import OrderSuccess from './component/Cart/OrderSuccess.jsx';
import OrderDetails from './component/Order/OrderDetails.jsx';
import Dashboard from './component/Admin/Dashboard.jsx';
import ProductList from './component/Admin/ProductList.jsx';
import NewProduct from './component/Admin/NewProduct.jsx';
import UpdateProduct from './component/Admin/UpdateProduct.jsx';
import OrderList from './component/Admin/OrderList.jsx';
import ProcessOrder from './component/Admin/ProcessOrder.jsx';
import UsersList from './component/Admin/UserList.jsx';
import UpdateUser from './component/Admin/UpdateUser.jsx';
import ProductReviews from './component/Admin/ProductReviews.jsx';
import Contact from './component/layout/Contact/Contact.jsx';
import About from './component/layout/About/About.jsx';
import NotFound from "./component/layout/Not Found/NotFound.jsx"

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    store.dispatch(loadUser());


  }, [])

  // window.addEventListener("contextmenu", (e)=> e.preventDefault());
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/product/:id' Component={ProductDetails} />
        <Route exact path='/products' Component={Products} />
        <Route path='/products/:keyword' Component={Products} />
        <Route exact path='/search' Component={Search} />
        <Route exact path='/login' Component={LoginSignUp} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/password/forgot" Component={ForgotPassword} />
        <Route exact path="/password/reset/:token" Component={ResetPassword} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/about" Component={About} />

        <Route
          element={<PrivateRouteAdmin isAdmin={true} />}
        >
          <Route element={<Dashboard />} path="/admin/dashboard" exact />
          <Route element={<ProductList />} path="/admin/products" exact />
          <Route element={<NewProduct />} path="/admin/product" exact />
          <Route element={<UpdateProduct />} path="/admin/product/:id" exact />
          <Route element={<OrderList />} path="/admin/orders" exact />
          <Route element={<ProcessOrder />} path="/admin/order/:id" exact />
          <Route element={<UsersList />} path="/admin/users" exact />
          <Route element={<UpdateUser />} path="/admin/user/:id" exact />
          <Route element={<ProductReviews />} path="/admin/reviews" exact />

        </Route>


        <Route
          element={<PrivateRoute isAdmin={false} />}
        >
        <Route element={<Profile />} path="/account" exact />
        <Route element={<UpdateProfile />} path="/me/update" exact />
          <Route element={<UpdatePassword />} path="/password/update" exact />
          <Route element={<Shipping />} path="/login/shipping" exact />
          <Route element={<ConfirmOrder />} path="/order/confirm" exact />
          <Route element={<OrderSuccess />} path="/success" exact />
          <Route element={<MyOrders />} path="/orders" exact />
          <Route element={<OrderDetails />} path="/order/:id" exact />


          <Route element={
            <PaymentGuard />
          } path="/process/payment" exact />
        </Route>
        
        <Route path='*' Component={window.location.pathname === "/process/payment" ? null : NotFound} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;

