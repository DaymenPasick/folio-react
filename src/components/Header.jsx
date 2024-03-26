//Imports Navigation that will show up on Header
import Nav from './Navigation';

//Structure for Header
export default function Header(props) {
    return (
       <div className='container'>
         <div className='row pt-3'>
            <div className='col-sm-4 d-flex justify-content-evenly'>
               <h1 className='nameHeader letterShadow'><span className='spanHeader'>Day</span>men</h1>
            </div>
            
            <div className='col-sm-8 d-flex justify-content-end'>
               <Nav />
            </div>
            
         </div>
       </div>
    );
}    