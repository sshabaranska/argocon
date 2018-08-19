import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private auth: AuthService,
               private router: Router) {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/signin']);
    }
  }
}
