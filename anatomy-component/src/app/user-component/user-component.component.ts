import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [UserProfileComponent],
  template: '<app-user-profile/>',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {
    username = 'Yanfu'
}
