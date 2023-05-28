import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";


const Layout = () => {
return(
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element:<Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ],
  },
]);


function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
