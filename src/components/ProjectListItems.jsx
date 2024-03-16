import React from 'react'

// import Image from '../../public/project1img.png'



// require('../../public/assets/pastProjectImgs/')
// import pathing from '../assets/pastProjectImgs'
//will be used for dynamic generation of the list content
//for Project.jsx
function ProjectListItems({pastProject}) {
  return (
    <li className="" >
    {`${pastProject.title}`}
    <img src={`${pastProject.imgRef}`} alt={`img of ${pastProject.title}`} />
    {`${pastProject.imgRef}`}
    {`${pastProject.deployedLink}`}
    {`${pastProject.gitHubLink}`}
  </li>
  )
}

export default ProjectListItems;