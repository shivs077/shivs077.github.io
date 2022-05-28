import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import ReactDOM from 'react-dom';

import useScrollToTop from './useScrollToTop';
import routes from 'routes';

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

const ROUTES = routes.map(i => i.path);

const Navigation = ({ showMenu, clicked, setClicked }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  useScrollToTop(pathname);

  useEffect(() => {
    const keyUpHandler = e => {
      const key = e.keyCode ? e.keyCode : e.which;
      const callbackName = KEYS[key];
      const currentPathIndex = ROUTES.indexOf(pathname);
      const nextPath = ROUTES[currentPathIndex + 1];
      const previousPath = ROUTES[currentPathIndex - 1];

      if (callbackName === 'onRight' && nextPath && !showMenu) {
        setClicked('next');
        setTimeout(() => history.push(nextPath), 200);
      } else if (callbackName === 'onLeft' && previousPath && !showMenu) {
        setClicked('previous');
        setTimeout(() => history.push(previousPath), 200);
      }
    };
    const keyDownHandler = e => {
      const key = e.keyCode ? e.keyCode : e.which;
      const callbackName = KEYS[key];
      if ((callbackName === 'onRight' || callbackName === 'onLeft') && !showMenu) {
        setClicked(callbackName === 'onRight' ? 'next' : 'previous');
      }
    };
    window.addEventListener('keyup', keyUpHandler);
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keyup', keyUpHandler);
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [history, pathname, showMenu, setClicked]);

  const handleNext = e => {
    setClicked('next');
    const currentPathIndex = ROUTES.indexOf(pathname);
    setTimeout(() => history.push(ROUTES[currentPathIndex + 1]), 200);
  };

  const handlePrevious = e => {
    setClicked('previous');
    const currentPathIndex = ROUTES.indexOf(pathname);
    setTimeout(() => history.push(ROUTES[currentPathIndex - 1]), 200);
  };

  return ReactDOM.createPortal(
    <div id="navigation">
      {ROUTES.indexOf(pathname) !== ROUTES.length - 1 && (
        <button className={`right-btn${clicked === 'next' ? ' active' : ''}`} onClick={handleNext}>
          <i className="fas fa-angle-right fa-4x"></i>
        </button>
      )}
      {ROUTES.indexOf(pathname) !== 0 && (
        <button className={`left-btn${clicked === 'previous' ? ' active' : ''}`} onClick={handlePrevious}>
          <i className="fas fa-angle-left fa-4x"></i>
        </button>
      )}
    </div>,
    document.body,
  );
};

export default Navigation;
