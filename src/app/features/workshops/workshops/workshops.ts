import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './workshops.html',
  styleUrl: './workshops.scss'
})
export class Workshops {}