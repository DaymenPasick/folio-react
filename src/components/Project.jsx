//Imports the individual lists
import ProjectListItems from "./ProjectListItems"

//Allows for dynamic generation and export of (.mapped) past projects
export default function Project({pastProjects}) {
    return(
        <ul>
            {pastProjects.map((pastProject) => (      
             <ProjectListItems pastProject={pastProject}
                          key={pastProject.projectNumber}/> 
           ))}
        </ul>
    )



}