//Bringing in Outlet import that will facilitate page navigation
import { Outlet } from 'react-router-dom';

//Allows us to use Header and Footer components here
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/styles.css'


function App() {
    //Will invoke Nav and Outlet from imports 
  return (
    <div className='pageBackground'>
      <div className='container'>
      <div className='row justify-content-center'>
      <Header />
      </div>
      <main className='mx-3 myContainer' >
        <Outlet />
        <Footer />
      </main>
      </div>
    </div>
  );
}

//Will allow for use of setup App elsewhere in code
export default App;