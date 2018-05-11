import React from 'react';
import './about.css'

const AboutList = ({ about }) => (
  <div>
  <div className="box">
  <ul>
  <div id="about">
  <li className="about">About</li>
  </div>
  <h5 id="webdeveloper">Web Developer</h5>
  <li id="bio">{about.bio}</li>
  <div className="languages">
  <h5 id="know">The Languages I know are:</h5>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  </div>
  <a href={about.html_url}><img id="git" src="https://image.flaticon.com/icons/png/128/37/37318.png" /></a>
  </ul>
  </div>
    <div className="box1">
  <ul>
  <div className="container">
  <a href={about.html_url}><img src={about.avatar_url} id="me"className="image"/></a>

  </div>
  <li id="name"><a href={about.html_url}>{about.login}</a></li>
  <li>Followers: {about.followers} </li>
  <li>Repos: {about.public_repos}</li>
  </ul>

  </div>
  </div>
)

const About = (props) => {
   return (
     <div>
      <ul>
           {props.about.map(about => (
             <AboutList about={about} key={about.name.id} />
           ))}
        </ul>

     </div>
   )
}


export default About;
