import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers:[AuthService]
})
export class SignupPage {
  // signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  // signup() {
  //   if (this.signupForm.valid && this.signupForm.value.password === this.signupForm.value.confirmPassword) {
  //     const { email, password } = this.signupForm.value;
  //     this.authService.signup(email, password).subscribe({
  //       next: () => this.router.navigate(['/login']),
  //       error: (err) => console.error(err)
  //     });
  //   } else {
  //     alert('Passwords do not match!');
  //   }
  // }
  email='';
  password='';
  confirmPassword='';
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
}
