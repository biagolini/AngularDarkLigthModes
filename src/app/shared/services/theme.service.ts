import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  
  setTheme(darkTheme: boolean) {
    if (darkTheme) this.theme = 'theme-alternate';
    else this.theme = '';
  }

  set theme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  get theme() {
    if (localStorage.getItem('theme') == null) {
      return '';
    } else {
      return localStorage.getItem('theme') as string;
    }
  }


}
