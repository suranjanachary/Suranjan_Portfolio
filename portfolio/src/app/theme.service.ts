import { Inject, Injectable, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeKey = 'dark-theme';
  isDarkMode: boolean = false;


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem(this.darkThemeKey, isDark ? 'enabled' : 'disabled');
    }
  }

  private loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem(this.darkThemeKey) === 'enabled';
      if (this.isDarkMode) {
        document.body.classList.add('dark-theme');
      }
    }
  }
}
