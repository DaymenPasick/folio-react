import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItems({pastProject}) {
  return (
  //  <div className="container">
      <div className='row text-center '>   
            <div className='col-sm-10 '>
            {`${pastProject.title}`}
            <img className='img-fluid mx-auto d-block ' src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
            <a href={`${pastProject.deployedLink}`} target="_blank">View Live Website</a>
            <span className='breakingSpan'></span>
            <a href={`${pastProject.gitHubLink}`} target="_blank">View On GitHub</a>
            </div>
      </div>

  //  </div>
  )
}

export default ProjectListItems;