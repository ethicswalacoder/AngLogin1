import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
loginUser: any[] = [];
loginObj: any = {
  userName: '',
  passWord: '',
};
 

onLogin() {
  if(this.loginObj.userName === "" || this.loginObj.passWord === ""){
    alert("Enter the username or password");

  } else {
  this.loginUser.push(this.loginObj);
  localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
  console.log("user login successfully!");
  alert("user login successfully!");
  this.loginObj = {
    userName: '',
    passWord: '',
  };
}
}

}
