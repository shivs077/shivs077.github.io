import React, { Component, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift',
  77: 'm',
};
export default class Header extends Component {
  // state = {
  //   showMenu: false,
  // };
  constructor() {
    super();
    this.buttonRef = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keydownHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownHandler);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.showMenu && this.props.showMenu) {
      this.buttonRef.current.focus();
    }
  }
  keydownHandler = e => {
    const { showMenu } = this.props;
    const key = e.keyCode ? e.keyCode : e.which;
    const callbackName = KEYS[key];
    if (callbackName === 'onEsc' && showMenu) {
      this.props.setShowMenu(false);
    } else if (callbackName === 'm' && !showMenu) {
      this.props.setShowMenu(true);
    }
  };

  menuTog = () => {
    this.props.setShowMenu(prev => !prev);
  };
  render() {
    let Show = '';
    let Close = '';
    if (this.props.showMenu) {
      Show = ' show';
      Close = ' close';
    }
    return (
      <header>
        <button
          ref={this.buttonRef}
          tabIndex={0}
          className={'menu-btn' + Close}
          onClick={this.menuTog}
          onKeyUp={e => [13, 32, 27].includes(e.keyCode) && e.target.blur()}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </button>
        <MenuModal show={Show}>
          <nav className={'menu' + Show}>
            <div className={' menu-branding' + Show}>
              <div className=" portrait " />
            </div>
            <ul className={'menu-nav' + Show}>
              <li className={'nav-item ' + Show} onClick={this.menuTog}>
                <NavLink exact to="/" className="nav-link" activeClassName="current">
                  Home
                </NavLink>
              </li>

              <li className={'nav-item ' + Show} onClick={this.menuTog}>
                <NavLink to="/about" className="nav-link" activeClassName="current">
                  About
                </NavLink>
              </li>

              <li className={'nav-item ' + Show} onClick={this.menuTog}>
                <NavLink to="/work" className="nav-link" activeClassName="current">
                  Work
                </NavLink>
              </li>

              <li className={'nav-item ' + Show} onClick={this.menuTog}>
                <NavLink to="/contact" className="nav-link" activeClassName="current">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </MenuModal>
      </header>
    );
  }
}

const MenuModal = ({ children, show }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      if (show) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [show]);
  return children;
};
