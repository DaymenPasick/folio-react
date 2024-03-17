//Bringing in Outlet import that will facilitate  page navigation
//using the page URL's
import { Outlet } from 'react-router-dom';

//Allows use of component that will be created later
import Header from './components/Header';
import Footer from './components/Footer';


//eventually will make this into a seperate stylesheet
//for neater code
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    // width: '100vh',
    padding: '0',
    backgroundColor: 'grey'
  },
} 


function App() {
    //Will invoke Nav and Outlet from imports 
  return (
    <div >
      <Header />
      {/* playing with styleing...my true enemy xD */}
      <main className="mx-3" style = {styles.container}>
        <Outlet />

        <Footer />
      </main>
      
    </div>
  );
}

//Will allow for use of setup App elsewhere in code
export default App;