import React, { Component } from 'react';
import Nav from '../../Components/Nav'


class Navbar extends Component {
  state = {
    profile: []
  }

  componentDidMount() {
    this.setState({isFetching: true})
    fetch('https://api.github.com/users/doggexl')
    .then((response) => response.json())
    .then(json => this.setState({profile: [json]}))
  }

  render() {
    return (
      <div>

     <Nav info={this.state.profile} />
 
   </div>
  )
  }
}



export default Navbar;
