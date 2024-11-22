import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Auth,signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule],
  providers:[AuthService]
})
export class SignupPage {
  // signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private auth:Auth
  ) {}
  email='';
  password='';
  confirmPassword='';
  isGoogleSignUp = false;
  signUp(){
    if(this.password===this.confirmPassword&&this.email.length!=0){
      this.authService.signup(this.email,this.password).subscribe({
        next:()=>this.router.navigate(['/login']),
        error:(err)=>console.log(err)
      
      })
    }else{
      alert("invalid inputs or passwords not matching")
    }
  }
  async signUpWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      console.log('User signed up with:', result.user);
      this.email = result.user.email || ''; 
      this.isGoogleSignUp = true; 
    } catch (error) {
      console.log(error);
    }
  }

  submitGooglePassword() {
    if (this.password ===this.confirmPassword) {
      this.authService.signup(this.email, this.password).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => console.log(err),
      });
    } else {
      alert('Please enter a password to complete signup');
    }
  }
}
