import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItem({project}) {
  return (

    <div className='col-6 col-sm-4'>
      <div className='m-0 p-0 pt-sm-3 generalText'>   
        {`${project.title}`}
      </div> 

      <a href={`${project.deployedLink}`} title='View Live Website' target='_blank'>
        <img className='mx-auto mt-2 mb-3 img-fluid d-block folioImgBorder' 
        src={`${project.imgRef}`} alt={`img of ${project.title}`} />
      </a>

      <div className='pb-sm-2 pb-md-5 '>
        <a href={`${project.gitHubLink}`} target="_blank">View On GitHub</a>
      </div>
    </div>
  )
}

export default ProjectListItem;