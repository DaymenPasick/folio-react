//Bringing in Outlet import that will facilitate  page navigation
//using the page URL's
import { Outlet } from 'react-router-dom';

//Allows use of component that will be created later
import Nav from './components/Navigation';


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
      <Nav />
      {/* playing with styleing...my true enemy xD */}
      <main className="mx-3" style = {styles.container}>
        <Outlet />
      </main>
    </div>
  );
}

//Will allow for use of setup App elsewhere in code
export default App;