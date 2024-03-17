import ReactDOM from 'react-dom/client'

//These imports will facilitate router creation
//and give the router access to additional react-router-dom utilities
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//Will need this at least for use of nav-link 
//class in Navigation.jsx
import 'bootstrap/dist/css/bootstrap.min.css'


//Imports will connect router created below to 
//the pages indicated by their respective paths
import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


//Router setup that will be used to define our
//website pathing
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
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


//This will wrap App router with Routerprovider,
//letting the code use additional utilities with the router
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );