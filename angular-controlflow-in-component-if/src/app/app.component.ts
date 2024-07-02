import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '@if (isLoginIn){<span>Yes the server is running </span>} @else{<p> welcome , seem you are logout</p>}',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-controlflow-in-component-if';

  isLoginIn = false;
}
