import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItems({pastProject}) {
  return (

        <div className='col-6 col-sm-4'>
          <div className='pt-sm-3 p-0 m-0'>   
            {`${pastProject.title}`}
          </div> 
            <img className='img-fluid mx-auto d-block mt-2 mb-2 folioImgBorder' src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
            <a href={`${pastProject.deployedLink}`} target="_blank">View Live Website</a>
            <span className='breakingSpan'></span>
            <a href={`${pastProject.gitHubLink}`} target="_blank">View On GitHub</a>
        </div>

  )
}

export default ProjectListItems;