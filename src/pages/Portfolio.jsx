//Will utilize Project from Project component
import Project from '../components/Project';

//Grabs objects from pastProjects array
import pastProjects from '../pastProjects'


//Setup for Portfolio page
export default function Portfolio() {
    return (
      <div className='container d-flex flex-column'>
       <div className='row text-center pt-5 '>
        <div className="col ">
          <h1 className='pageHeaderText'>Portfolio</h1>
        <p className='generalText'>
          Click on an image to checkout one of my past projects!
        </p>
          </div>
       </div>
  
        <Project pastProjects={pastProjects}/>
        
      </div>

    );
  }