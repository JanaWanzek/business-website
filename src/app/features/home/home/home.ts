import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { ServicesPreview } from '../components/services-preview/services-preview';
import { About } from '../components/about/about';
import { Testimonials } from '../components/testimonials/testimonials';
import { Gift } from '../../../../features/home/component/gift/gift';
@Component({
  standalone:true,
  selector: 'app-home',
  imports: [Hero, ServicesPreview, About, Testimonials, Gift],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
