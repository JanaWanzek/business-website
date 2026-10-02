import { Routes } from '@angular/router';

import { Home } from './features/home/home/home';
import { Workshops } from './features/workshops/workshops/workshops';
import { Coaching } from './features/coaching/coaching/coaching';
import { Contact } from './features/contact/contact/contact';
import { AboutPage } from './features/about/about';
import { IndividuelleFormate } from './features/individuelle-formate/individuelle-formate';

import { TalenteGewinnen } from './features/services/TalenteGewinnen/TalenteGewinnen';
import { Vereinbarkeit } from './features/services/Vereinbarkeit/Vereinbarkeit';
import { FrauenFuehrung } from './features/services/FrauenFuehrung/FrauenFuehrung';
import { Gleichstellung } from './features/services/Gleichstellung/Gleichstellung';
import { Resilienz } from './features/services/Resilienz/Resilienz';
import { Demokratiefitness } from './features/services/Demokratiefitness/Demokratiefitness';

import { Impressum } from './features/Impressum/Impressum';
import { Datenschutz } from './features/Datenschutz/Datenschutz';

export const routes: Routes = [

  { path: 'home', component: Home, title: 'Jana Wanzek | Gleichstellung & Personalentwicklung' },

  { path: 'workshops', component: Workshops, title: 'Workshops für Organisationen | Jana Wanzek' },

  { path: 'individuelle-formate', component: IndividuelleFormate, title: 'Individuelle Workshops & Formate | Jana Wanzek' },

  { path: 'coaching', component: Coaching, title: 'Coaching | Jana Wanzek' },

  { path: 'ueber-mich', component: AboutPage, title: 'Über mich | Jana Wanzek' },

  { path: 'Impressum', component: Impressum, title: 'Impressum | Jana Wanzek' },

  { path: 'Datenschutz', component: Datenschutz, title: 'Datenschutz | Jana Wanzek' },

  { path: 'kontakt', component: Contact, title: 'Kontakt | Jana Wanzek' },

  { path: 'TalenteGewinnen', component: TalenteGewinnen, title: 'Faire Personalgewinnung & Personalentwicklung | Jana Wanzek' },

  { path: 'Vereinbarkeit', component: Vereinbarkeit, title: 'Vereinbarkeit in Organisationen | Jana Wanzek' },

  { path: 'FrauenFuehrung', component: FrauenFuehrung, title: 'Frauen & Führung | Jana Wanzek' },

  { path: 'gleichstellung', component: Gleichstellung, title: 'Gleichstellung in Organisationen | Jana Wanzek' },

  { path: 'Resilienz', component: Resilienz, title: 'Resilienz in Organisationen | Jana Wanzek' },

  { path: 'demokratiefitness', component: Demokratiefitness, title: 'Demokratiefitness für Organisationen | Jana Wanzek' },


  { path: '', redirectTo: 'home', pathMatch: 'full' }

];