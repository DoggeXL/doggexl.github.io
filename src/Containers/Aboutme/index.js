import React, { Component } from 'react';
import AboutMe from '../../Components/AboutMe'

class About extends Component {
  state = {
    details: []
  }

  componentDidMount() {
    this.setState({isFetching: true})
    fetch('https://api.github.com/users/doggexl')
    .then((response) => response.json())
    .then(json => this.setState({details: [json]}))
  }

  render() {

    return (
      <div>

    <AboutMe about={this.state.details} />

   </div>
  )
  }
}



export default About;
