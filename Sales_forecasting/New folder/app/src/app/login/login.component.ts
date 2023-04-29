import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupusers: any[] = [];
  signupobj: any ={
    username: '',
    email: '',
    password: ''
  };
  loginobj:any ={
    username: '',
    password: ''
  };
  
    
  
  constructor(private router:Router){ }
  
  ngOnInit(): void {
    const localData =localStorage.getItem('signupusers');
    if(localData !=null){
      this.signupusers = JSON.parse(localData);
    }
  }
  onsignup(){
  this.signupusers.push(this.signupobj);
  localStorage.setItem('signupusers',JSON.stringify(this.signupusers));
  this.signupobj  ={
    username: '',
    email: '',
    password: ''
  };
  alert('Signed up successfully :)');
}
onlogin(){
  debugger
  const isuserexist =this.signupusers.find(m => m.username == this.loginobj.username && m.password == this.loginobj.password);
  if(isuserexist != undefined){
    alert('Login successfull');
    this.router.navigate(['fileupload'])
  }else{
    alert('Wrong Credentials !! Try again');
  }
  }
}
