import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent  {

  constructor() { }

  public mobileMenu: boolean = false;

  public toggleMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }

}
