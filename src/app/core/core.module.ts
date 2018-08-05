import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainService } from 'src/app/services/main.service';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { NavBarComponent } from 'src/app/core/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ],
  providers: [MainService]
})
export class CoreModule { }
