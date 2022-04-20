import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDark: boolean = true;
  themeName = "";

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeName = localStorage.getItem("theme") as string;
  }

  setDarkTheme(){
    this.themeService.setTheme(true);
    this.themeName = localStorage.getItem("theme") as string;

  }

  setLigthTheme(){
    this.themeService.setTheme(false);
    this.themeName = localStorage.getItem("theme") as string;
  }


}
