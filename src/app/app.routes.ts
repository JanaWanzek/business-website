import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { Services } from './features/services/services/services';
import { Workshops } from './features/workshops/workshops/workshops';
import { Coaching } from './features/coaching/coaching/coaching';
import { Contact } from './features/contact/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'organisationen', component: Services },
  { path: 'workshops', component: Workshops },
  { path: 'coaching', component: Coaching },
  { path: 'kontakt', component: Contact },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
