import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StnButton } from '@statnett/angular-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StnButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-2';
}