import ReactDOM from 'react-dom/client'

//these imports will facilitate router creation
//and give the router access to additional react-router-dom utilities
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//will import some sort of style code resource here in the future*


//imports will connect router created below to 
//the pages indicated by their respective paths
import App from './App';
import Error from './pages/Error'; //adding error page for overall app error messages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';



//router setup that will be used to define our
//website pathing
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      //similar to functionality of handlebars
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Blog',
          element: <Blog />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
      ],
    },
  ]);







//this will wrap App router with Routerprovider,
//allowing us to use additional utilities with our router
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );