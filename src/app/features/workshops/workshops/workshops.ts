import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-workshops',
  imports: [RouterLink],
  templateUrl: './workshops.html',
  styleUrl: './workshops.scss',
})
export class Workshops {}
