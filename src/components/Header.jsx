//Imports Navigation that will show up on Header
import Nav from './Navigation';

//Structure for Header
export default function Header(props) {
    return (
       <div className='container'>
         <div className='row pt-5 justify-content-between'>

            <div className="col-9">
          <Nav />
          </div>

         <div className="col-3">
         <h1>Daymen</h1>
            </div>
            
          </div>
       </div>
    );
}    