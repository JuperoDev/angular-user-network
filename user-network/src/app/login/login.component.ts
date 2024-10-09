import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  // Call the AuthService to log in with Google
  loginWithGoogle() {
    this.authService.googleSignIn();
  }
}
