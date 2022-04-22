import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trial';
  color:string ="";
  Changecolor(color:string){
    console.log(color);
    this.color = color;
  }
}
