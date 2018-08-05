import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BlankPageComponent } from 'src/app/modules/blank-page/blank-page.component';

const appRoutes: Routes = [
  { path: '', loadChildren:'./modules/home/home.module#HomeModule' },
  { path: 'past-trials', loadChildren:'./modules/blank-page/blank-page.module#BlankPageModule' },
  { path: 'how-it-works', loadChildren:'./modules/blank-page/blank-page.module#BlankPageModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
