import { Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';

const MyRoute = ({ path, exact, component: Component, clicked, setClicked }) => {
  return (
    <Route key={path} exact={exact} path={path}>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames={clicked === 'previous' ? 'page-slide-right' : 'page-slide-left'}
          unmountOnExit
          onExited={() => setClicked(false)}
        >
          <div className={clicked === 'previous' ? 'page-slide-right' : 'page-slide-left'}>
            <Component />
          </div>
        </CSSTransition>
      )}
    </Route>
  );
};

export default MyRoute;
