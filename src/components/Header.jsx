//Imports Navigation that will show up on Header
import Nav from './Navigation';

//Structure for Header
export default function Header(props) {
    return (
       <div className='container'>
         <div className='row pt-3 '>
         <div className="col-md-3">
         <h1>Daymen</h1>
            </div>

            <div className="col-md-9">
          <Nav />
          </div>

            
          </div>
       </div>
    );
}    