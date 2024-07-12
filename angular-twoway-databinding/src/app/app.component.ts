import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizerComponent } from './sizer/sizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  fontSizePx = 16;
}
