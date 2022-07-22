import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//envío de variables usando la clase "AppComponent"
export class AppComponent {
  title = 'my-dream-app';
  name = 'jordy';
  webpage = 'www.unsa.edu.pe';
  email = 'jordy1234@gmail.com';
}
