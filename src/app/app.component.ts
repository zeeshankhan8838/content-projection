import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'content-projection';


  onInputChange(event:Event|any){
    console.log(event?.target?.value);
      }
}
