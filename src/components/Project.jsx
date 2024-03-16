// will be used muiltiple times in my Portfolio section
import ProjectListItems from "./ProjectListItems"

// require('../../src/assets/pastProjectImgs/project1img.png')

export default function Project({pastProjects}) {

    return(
        <ul>
            {pastProjects.map((pastProject) => (      
                

               <ProjectListItems pastProject={pastProject} key={pastProject.projectNumber}/> 
           ))}
        </ul>
    )



}