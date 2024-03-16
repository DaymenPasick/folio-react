//Imports the individual lists
import ProjectListItems from "./ProjectListItems"


export default function Project({pastProjects}) {
    return(
        <ul>
            {pastProjects.map((pastProject) => (      
                
               <ProjectListItems pastProject={pastProject} key={pastProject.projectNumber}/> 
           ))}
        </ul>
    )



}