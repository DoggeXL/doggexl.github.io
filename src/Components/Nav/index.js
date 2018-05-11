import React from 'react';
import './style.css'

const ProfileItems = ({ profile }) => (
  <div id="navbar" className="nav">
  <ul>
  <li key={profile.name.id} id="git"><a href="https://github.com/DoggeXL/">My Github</a></li>
  <li key={profile.name.id} id="git"><a href="/">Home</a></li>
  <li key={profile.name.id} id="git"><a href="/Aboutme">About Me</a></li>
  </ul>
 </div>
)
const Profile = (props) => {
   return (
     <div>
      <ul>
        {props.info.map(profile => (
           <ProfileItems profile={profile} key={profile.name.id}/>
        ))}
        </ul>

     </div>
   )
}


export default Profile;
