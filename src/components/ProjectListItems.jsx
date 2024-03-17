import React from 'react'


//Dynamicaly pulls prop data from pastProject.js
//and uses it in the Project.jsx component
function ProjectListItems({pastProject}) {
  return (
    <li className="" >
    {`${pastProject.title}`}
    <img src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
    <a href={`${pastProject.deployedLink}`}>{`${pastProject.deployedLink}`}</a>
    {`${pastProject.imgRef}`}
    {`${pastProject.gitHubLink}`}
  </li>
  )
}

export default ProjectListItems;