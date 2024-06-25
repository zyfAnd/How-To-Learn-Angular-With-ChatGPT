import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: 'Hello {{city}}, {{ 1 + 1 }}',
  styles: `
  :host {
    color: blue;
  }
`,
})
export class AppComponent {
  title = 'anatomy-component';
  city = 'Shanghai'
}
