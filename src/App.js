import './App.css';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shered/Header/Header';
import Footer from './Pages/Shered/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequirAuth from './Pages/Authentication/RequirAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AddAProduct from './Pages/Dashboard/Admin/AddAProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts';
import CheckOut from './Pages/Dashboard/CheckOut.js/CheckOut';
import NotFound from './Pages/NotFound/NotFound';
import Blog from './Pages/Blog/Blog';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
    // Create a client
    const queryClient = new QueryClient()
    return (

        <QueryClientProvider client={queryClient}>
            <div className="">
                <Header></Header>

                <div className='container m-auto'>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home></Home>} />
                        <Route path="Purchase/:ProductId" element={
                            <RequirAuth>
                                <Purchase></Purchase>
                            </RequirAuth>
                        } />
                        <Route path="/checkout/:checkoutPID" element={
                            <RequirAuth>
                                <CheckOut></CheckOut>
                            </RequirAuth>
                        } />
                        <Route path="dashboard" element={
                            <RequirAuth>
                                <Dashboard></Dashboard>
                            </RequirAuth>
                        } >

                            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
                            <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
                            <Route path='addreview' element={<AddReview></AddReview>}></Route>

                            <Route path='addaproduct' element={<AddAProduct></AddAProduct>}></Route>
                            <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
                            <Route path='manageorder' element={<ManageAllOrders></ManageAllOrders>}></Route>
                            <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>

                        </Route>


                        <Route path="login" element={<Login></Login>} />
                        <Route path="register" element={<Register></Register>} />
                        <Route path="blog" element={<Blog></Blog>} />
                        <Route path="portfolio" element={<Portfolio></Portfolio>} />
                        <Route path="*" element={<NotFound></NotFound>} />
                    </Routes>


                </div>
                <Footer></Footer>
                <ToastContainer />
            </div>
        </QueryClientProvider>
    );
}

export default App;
