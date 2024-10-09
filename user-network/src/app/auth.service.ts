import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  // Method to sign in using Google OAuth
  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then((result) => {
        console.log('User signed in with Google:', result.user);
        this.router.navigate(['/dashboard']); // Navigate to dashboard or home page
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
      });
  }

  // Method to sign out the current user
  logout() {
    return signOut(this.auth).then(() => this.router.navigate(['/login']));
  }

  // Getter to check the current user
  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
