//These two methods will allow us to use router-dom router and link 
import { Link, useLocation } from 'react-router-dom';

function CreateNavigationTabs() {
    //Sets variable for active page to be used in the return() below
    const currentPage = useLocation().pathname;

    //Visual and functional setup for Navigation
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/About"
            //Will set About tab to the active section upon initial page loading in
            className={currentPage === '/About' || currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About
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
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
    );




}

//Will allow for use elsewhere in code
export default CreateNavigationTabs;