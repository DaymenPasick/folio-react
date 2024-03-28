//Imports the individual lists
import ProjectListItem from "./ProjectListItem"

//Allows for dynamic generation and export of (.mapped) past projects
export default function Projects({items}) {
    return(
      <div className="container">
        <div className='row d-flex text-center'>   
          {items.map((project) => (      
            <ProjectListItem project={project} key={project.projectNumber}/> 
           ))}
        </div>
      </div>
    )
}