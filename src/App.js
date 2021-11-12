
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthContext/AuthProvider';
import DashboardHome from './Pages/Dashboard/DasboardHome/DashBoardHome';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MoreDrones from './Pages/MoreDrones/MoreDrones';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Register from './Pages/Register/Register';
import AppNavbar from './Pages/Shared/AppNavbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
  <AuthProvider>
      <BrowserRouter>
     <AppNavbar></AppNavbar>
    <Switch>
   <Route exact path="/">
  <Home></Home>
   </Route>
   <Route path="/home">
  <Home></Home>
   </Route>
   <Route path="/moreDrones">
 <MoreDrones></MoreDrones>
   </Route>
   <PrivateRoute path="/purchase/:productId">
<PurchasePage></PurchasePage>
   </PrivateRoute>
   <Route path="/login">
<Login></Login>
   </Route>
   <Route path="/dashboard">
<DashboardHome></DashboardHome>
   </Route>
   <Route path="/register">
<Register></Register>
   </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;