import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingPollsComponent } from 'src/app/modules/voting-polls/voting-polls.component';
import { VotingBoxComponent } from 'src/app/modules/voting-polls/components/voting-box/voting-box.component';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    VotingPollsComponent,
    VotingBoxComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
