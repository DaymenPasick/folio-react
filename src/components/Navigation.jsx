//Will use react-router-doms Link component to conditionally render 
//different parts of my Portfolio

//These two imports will give access to utilities/methods that 
//can be used the router defined in main.jsx
import { Link, useLocation } from 'react-router-dom';

function CreateNavigationTabs() {

    //Sets variable for active page to be used in the return() below
    const currentPage = useLocation().pathname;


    //In the return below, terinary operators will be used to check 
    //the current page, and use bootsrap import from main.jsx
    //to utilize the nav-link class functionality for dynamic tabs
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
    );




}

//Will allow for use of inlying function elsewhere in code
export default CreateNavigationTabs;