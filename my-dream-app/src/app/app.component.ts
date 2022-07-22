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


  sayhello(nameUser:any){
    alert('Holaa, '+nameUser);
  }


}

