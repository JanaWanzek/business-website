import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-coaching',
  imports: [RouterLink],
  templateUrl: './coaching.html',
  styleUrl: './coaching.scss',
})
export class Coaching {}
