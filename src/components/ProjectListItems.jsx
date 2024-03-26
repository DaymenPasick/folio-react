import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItems({pastProject}) {
  return (

        <div className='col-6 col-sm-4'>
          <div className='pt-sm-3 p-0 m-0 generalText'>   
            {`${pastProject.title}`}
          </div> 

          <a href={`${pastProject.deployedLink}`} title='View Live Website' target="_blank">
            <img className='img-fluid mx-auto d-block mt-2 mb-3 folioImgBorder' 
            src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
          </a>
            <div className='pb-sm-2 pb-md-5 '>
            <a href={`${pastProject.gitHubLink}`} target="_blank">View On GitHub</a>
            </div>
        </div>

  )
}

export default ProjectListItems;