import React, { Component } from 'react';
import ProjectList from '../../Components/ProjectList'
import './style.css'

class Projects extends Component {
  state = {
    projects: [],
    isFetching: false
  }

  componentDidMount() {
    this.setState({isFetching: true})
    fetch('https://api.github.com/users/doggexl/repos')
    .then((response) => response.json())
    .then(json => this.setState({projects: json,  isFetching: false}))
  }

  render() {
    const { projects, profile, isFetching } = this.state
    return (
      <div>
      <div id="header">
     My Projects:
      </div>
   {
    isFetching && <div class="loader"></div>
   }
   {
     !isFetching &&  <ProjectList list={this.state.projects}/>
   }

   <div className="bottom">
   Total Projects:  {this.state.projects.length}
   
   </div>
   </div>
  )
  }
}



export default Projects;
