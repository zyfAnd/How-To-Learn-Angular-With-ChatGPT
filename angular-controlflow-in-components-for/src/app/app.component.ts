import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '@for (os of operationSystems; track  os.id) { <p>{{os.name}}</p> }',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-controlflow-in-components-for';

  operationSystems = [{id:'win', name:'windows'},{id:'osx',name:'MacOS'},{id:'linux',name:'Linux'}];
}
