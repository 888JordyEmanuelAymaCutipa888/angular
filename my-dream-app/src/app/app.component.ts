import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//envío de variables usando la clase "AppComponent"
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  webpage: string;
  email: string;
  hobbies: string[];

  constructor(){
    console.log("constructor...");
    this.name = 'jordy';
    this.email = 'jordy@gmail.com';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ['programacion', 'futbol', 'netflix'];
  }

  showhobbies(){
    return true;
  }

}

