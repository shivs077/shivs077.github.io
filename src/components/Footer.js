import React, { Component } from 'react';
import img from '../img/favicon.ico';
export default class Footer extends Component {
  render() {
    return (
      <footer id="main-footer">
        Copyright &copy; {new Date().getFullYear()} <br />
        <div>
          Made With &nbsp;
          <img src={img} alt="" width="20px" />
        </div>
      </footer>
    );
  }
}
