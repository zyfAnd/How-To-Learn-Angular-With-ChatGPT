import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponentComponent],
  // template: 'Hello {{city}}, {{ 1 + 1 }}',
  template: '<section><app-user-component/></section>',
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
