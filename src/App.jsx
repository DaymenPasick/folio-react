//Bringing in Outlet import that will facilitate  page navigation
//using the page URL's
import { Outlet } from 'react-router-dom';

//Allows use of component that will be created later
import Nav from './components/Navigation';

function App() {
    //Will invoke Nav and Outlet from imports 
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

//Will allow for use of setup App elsewhere in code
export default App;