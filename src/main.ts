import { Router } from '@vaadin/router';
import './styles/index.scss';
import './components/App';

const router = new Router(document.getElementById('app'));
router.setRoutes([
  {
    path: '/',
    component: 'app-el',
    children: [
      {
        path: '/',
        component: 'home-el',
        action: async () => {
          await import('./components/Home');
        },
      },
      {
        path: '/about',
        component: 'about-el',
        action: async () => {
          await import('./components/About');
        },
      },
      {
        path: '/info',
        component: 'info-el',
        action: async () => {
          await import('./components/Info');
        },
      },
    ]
  },
]);