import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<div [contentEditable]="isEditable"><p>Hello</p></div>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-property-binding';
  isEditable = true;

}
