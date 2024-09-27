import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  showSidebar: boolean = true;  // Nueva propiedad para controlar la visibilidad

  @HostListener('window: resize', ['$event'])

  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      });
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.screenWidth = window.innerWidth;

    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  checkRoute() {
    if (this.router.url === '/login' || this.router.url === '/reset/password' || this.router.url === '/resetPassword') {
      this.showSidebar = false;
      this.closeSidenav();
    } else {
      this.showSidebar = true;
    }
  }

}
