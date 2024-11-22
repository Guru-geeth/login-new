import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[AuthService]
})
export class LoginPage {
 
  email='';
  password='';
  constructor(private authService:AuthService,private router:Router){

  }
  login(){
    if(this.email&&this.password){
      this.authService.login(this.email,this.password).subscribe({
        next:(res:any)=>{
          this.authService.saveToken(res.access_token);
          console.log(res.access_token);
          // this.router.navigate(['/dashboard'])
        }
      })
    }
  }
}
