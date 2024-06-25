import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: 'Hello Universe',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anatomy-component';
}
