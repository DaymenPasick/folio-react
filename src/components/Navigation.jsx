//These two methods will allow us to use router-dom router and link 
import { Link, useLocation } from 'react-router-dom';

function CreateNavigationTabs() {
    //Sets variable for active page to be used in the return() below
    const currentPage = useLocation().pathname;

    //Visual and functional setup for Navigation
    return (
      <ul className="row nav nav-tabs pt-3 navbarBorder">
        <li className="col-3 col-sm-3 nav-item tabs rounded-top tabBorder d-flex justify-content-center tabShadow">
          <Link
            to="/About"
            //Will set About tab to the active section upon initial page loading in
            className={currentPage === '/About' || currentPage === '/' ? 'nav-link activeTab ' : 'nav-link defaultTab '}
          >
            About
          </Link>
        </li>

        <li className="col-3 col-sm-3 nav-item tabs rounded-top tabBorder d-flex justify-content-center tabShadow">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link activeTab ' : 'nav-link defaultTab'}
          >
            Portfolio
          </Link>
        </li>

        <li className="col-3 col-sm-3 nav-item tabs rounded-top tabBorder d-flex justify-content-center tabShadow">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link activeTab' : 'nav-link defaultTab'}
          >
            Contact
          </Link>
        </li>

        <li className="col-3 col-sm-3 nav-item tabs rounded-top tabBorder d-flex justify-content-center tabShadow">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link activeTab' : 'nav-link defaultTab'}
          >
            Resume
          </Link>
        </li>
      </ul>
    );
}

//Will allow for use elsewhere in code
export default CreateNavigationTabs;