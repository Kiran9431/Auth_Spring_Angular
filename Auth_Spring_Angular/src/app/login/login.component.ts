import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements Oninit {

  constructor(){ }

  ngOninit(); void{

  }
  login(loginForm):{
    console.log("Form is submitted")
}
}
