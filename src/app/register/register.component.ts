import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor (private fb:FormBuilder, private api:ApiService, private route:Router){}

  registerForm= this.fb.group({

    username:[''],
    email:[''],
    password:['']
  })


  register(){
    if (!this.registerForm.valid) {
      alert('please fill the form')


    }else{

      let username=this.registerForm.value.username
      let email=this.registerForm.value.email 
      let password=this.registerForm.value.password

      const user={username,email,password}

      this.api.registerAPI(user).subscribe({next:(res:any)=>{
        console.log(res);
        alert('register successfull')
        this.route.navigateByUrl('user/login')




      },
      error:(err:any)=>{
        console.log(err);

      }

    })

    }
  }

}
