import React from 'react';
import './style.css'

const ProjectListItem = ({ projects }) => (
  <div className="space">
  <li key={projects.name.id}>{projects.name}</li>
  <div>
  <li key={projects.url.id}>  <a href={projects.html_url}>Link</a> </li>
  </div>
  <li>   ‍ </li>
 </div>
)
const ProjectList = (props) => {
   return (
     <div>
      <ul>
        {props.list.map(projects => (
           <ProjectListItem projects={projects} key={projects.name.id}/>
        ))}
        </ul>

     </div>
   )
}


export default ProjectList;
