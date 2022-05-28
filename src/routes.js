import Home from './components/home.component';
import About from './components/about.component';
import Work from './components/work.component';
import Contact from './components/contact.component';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

export default routes;
