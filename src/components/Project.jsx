//Imports the individual lists
import ProjectListItems from "./ProjectListItems"

//Allows for dynamic generation and export of (.mapped) past projects
export default function Project({pastProjects}) {
    return(
        <div className="container">
        <div className='row text-center d-flex'>   
            {pastProjects.map((pastProject) => (      
             <ProjectListItems pastProject={pastProject}
                          key={pastProject.projectNumber}/> 
           ))}
        </div>
        </div>
    )



}