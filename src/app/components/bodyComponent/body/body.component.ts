import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  constructor(private router: Router) {}

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isSideNavCollapsed = false;

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }else if(this.router.url === '/login' || this.router.url === '/resetPassword'){
      styleClass = 'full-body';
    }
    return styleClass;
  }
  
}
