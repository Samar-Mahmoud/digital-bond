import { Routes } from '@angular/router';
import { SuccessModal } from './components/contact/success-modal/success-modal';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Digital Bond',
    children: [
      {
        path: 'done',
        title: 'Success',
        component: SuccessModal,
      },
    ],
  },
];
