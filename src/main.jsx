import ReactDOM from 'react-dom/client'

//these imports will facilitate router creation
//and give the router access to additional react-router-dom utilities
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//will import some sort of style code resource here in the future*


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