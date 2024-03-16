import ReactDOM from 'react-dom/client'

//these imports will facilitate router creation
//and give the router access to additional react-router-dom utilities
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//will need this at least for use of nav-link 
//class in Navigation.jsx
import 'bootstrap/dist/css/bootstrap.min.css'


//imports will connect router created below to 
//the pages indicated by their respective paths
import App from './App';
import Error from './pages/Error'; //adding error page for overall app error messages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


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
            path: '/Contact',
            element: <Contact />,
          },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },

      ],
    },
  ]);







//this will wrap App router with Routerprovider,
//allowing us to use additional utilities with our router
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );