import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './Home'; // User component
// import About from './About'; // User component
// import AdminDashboard from './AdminDashboard'; // Admin component
// import AdminUsers from './AdminUsers'; // Admin component
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import StoreSearch from "./pages/StoreSearch";
import Product from "./pages/Product";
import StartWrok from "./pages/StartWrok";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import BrowseJobs from "./pages/browsejobs/BrowseJobs";
import JobDetails from "./pages/jobDetails/JobDetails";
import Booking from "./pages/Booking";
import CheckoutNew from "./pages/CheckoutNew";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/store",
          element: <StoreSearch />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/start-work",
          element: <StartWrok />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <CheckoutNew />,
        },
        {
          path: "/jobs",
          element: <BrowseJobs />,
        },
        {
          path: "/jobs/:jobId",
          element: <JobDetails />,
        },
        {
          path: "/Booking",
          element: <Booking />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: '/about',
    //   element: <About />,
    // },
    // {
    //   path: '/admin',
    //   element: <AdminDashboard />, // Base admin component
    //   children: [
    //     {
    //       path: 'users',
    //       element: <AdminUsers />, // Admin users management
    //     },
    //     // Add more admin routes here
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
