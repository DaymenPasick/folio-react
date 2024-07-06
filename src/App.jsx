//Bringing in Outlet import that will facilitate page navigation
import { Outlet } from 'react-router-dom';

//Allows us to use Header and Footer components here
import Header from './components/Header';
import Footer from './components/Footer';

//For use of style sheet
import './styles/styles.css'


function App() {
    //Outlet lets utilization of react router in app.js to render components to page
  return (
    <div className='pageBackground'>
      <div className='container'>
          <Header />
      </div>
      <main className='container rounded-bottom rounded-end rounded-start folderBG pt-3'>
        
        <Outlet />

      </main>
      <div className='container mt-3 pt-2'>
        <Footer />
      </div> 
    </div>
  );
}

//Will allow for use of setup App elsewhere in code
export default App;