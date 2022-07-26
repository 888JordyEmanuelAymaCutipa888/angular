import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//envío de variables usando la clase "AppComponent"
export class AppComponent {

  users = ["ryan","joe", "cameron","john"];
  activated = false;

  title = 'my-dream-app';
  name: string;
  webpage: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;


  constructor(){
    console.log("constructor...");
    this.name = 'jordy';
    this.email = 'jordy@gmail.com';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ['programacion', 'futbol', 'netflix'];
    this.showHobbies = false;
  }


  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }


  newHobby(hobby:any){
    //console.log(hobby.value)
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }

  
  sayHello(){
    alert('Holaa, me invocaste desde app.component.ts');
  }


  deleteUser(user:any){
    for (let i = 0; i < this.users.length; i++) {
      if (user==this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }


  addUser(newUser:any){
    console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus;
    return false;
  }

}

