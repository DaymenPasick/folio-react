import React from 'react'

//will be used for dynamic generation of the list content
//for Project.jsx
function ProjectListItems({pastProject}) {
  return (
    <li className="">
    {`${pastProject.title}`}
    {`${pastProject.imgRef}`}
    {`${pastProject.deployedLink}`}
    {`${pastProject.gitHubLink}`}
  </li>
  )
}

export default ProjectListItems;