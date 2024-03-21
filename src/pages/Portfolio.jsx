//Will utilize Project from Project component
import Project from '../components/Project';

//Grabs objects from pastProjects array
import pastProjects from '../pastProjects'




export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>
          Check out some of my past projects!
        </p>

        <Project pastProjects={pastProjects}/>
      </div>
    );
  }