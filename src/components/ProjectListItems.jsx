import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItems({pastProject}) {
  return (

    <div className='col-6 col-sm-4'>
      <div className='m-0 p-0 pt-sm-3 generalText'>   
        {`${pastProject.title}`}
      </div> 

      <a href={`${pastProject.deployedLink}`} title='View Live Website' target='_blank'>
        <img className='mx-auto mt-2 mb-3 img-fluid d-block folioImgBorder' 
        src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
      </a>

      <div className='pb-sm-2 pb-md-5 '>
        <a href={`${pastProject.gitHubLink}`} target="_blank">View On GitHub</a>
      </div>
    </div>
  )
}

export default ProjectListItems;