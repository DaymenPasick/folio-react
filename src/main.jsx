//These 2 imports facilitate router creation and utilities
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//For Bootstrap style library
import 'bootstrap/dist/css/bootstrap.min.css'

//Client pathing for react router
import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


//React setup for router and respective client pathing
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


//Wraps our App w/ Routerprovider, allowing for use of its utilities
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );