import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InMarket';

  constructor(private router: Router) {}

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  checkRoute(){
    if (this.router.url === '/login' || this.router.url === '/resetPassword') {
      this.isSideNavCollapsed = true;
    }
  
  }
  
}
