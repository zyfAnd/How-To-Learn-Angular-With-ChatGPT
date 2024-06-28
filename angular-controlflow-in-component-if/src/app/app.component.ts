import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<span>Yes the server is running </span>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-controlflow-in-component-if';

  isLoginIn = true;
}
