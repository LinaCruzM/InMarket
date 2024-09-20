import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit{

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;

  constructor(private router: Router){

  }


  ngOnInit(): void {
  }


  getToolbarClass(): string{
    let styleClass = '';
    if(this.collapsed &&  this.screenWidth > 768){
      styleClass = 'tool-timmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'tool-md-screen';
    }else if(this.router.url === '/login' || this.router.url === '/resetPassword'){
      styleClass = 'full-body';
    }
    return styleClass;
  }
}
