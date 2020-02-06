import React, { Component } from 'react';
import logo from '../images/logo.png';
export default class Header extends Component {
  imgstyle = {
    background: '#eee',
    height: '100%'
  };

  containerStyle = {
    height: '10vh',
    background: '#eee',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    textAlign: 'center',
    zIndex: '99'
  };
  render() {
    return (
      <div style={this.containerStyle}>
        <img src={logo} style={this.imgstyle} alt="Murph-Logo"></img>
      </div>
    );
  }
}
