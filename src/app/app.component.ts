import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'CustomizedTheme';

  @HostBinding('class') 
  get themeMode(){
    return  localStorage.getItem('theme'); 
  }
  
}