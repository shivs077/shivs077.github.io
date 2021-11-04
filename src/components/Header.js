import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    showMenu: false
  };

  menuTog = () => {
    let sm = this.state.showMenu;
    this.setState({ showMenu: !sm });
  };
  render() {
    let Show = "";
    let Close = "";
    if (this.state.showMenu) {
      Show = " show";
      Close = " close";
    }
    return (
      <header>
        <div className={"menu-btn" + Close} onClick={this.menuTog}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className={"menu" + Show}>
          <div className={" menu-branding" + Show}>
            <div className=" portrait " />
          </div>
          <ul className={"menu-nav" + Show}>
            <li className={"nav-item " + Show} onClick={this.menuTog}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="current"
              >
                Home
              </NavLink>
            </li>

            <li className={"nav-item " + Show} onClick={this.menuTog}>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="current"
              >
                About
              </NavLink>
            </li>

            <li className={"nav-item " + Show} onClick={this.menuTog}>
              <NavLink
                to="/work"
                className="nav-link"
                activeClassName="current"
              >
                Work
              </NavLink>
            </li>

            <li className={"nav-item " + Show} onClick={this.menuTog}>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="current"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
