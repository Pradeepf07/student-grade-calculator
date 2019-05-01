import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { GradeCallComponent } from './grade-call/grade-call.component';
import { Route } from '@angular/compiler/src/core';
import { MainComponent } from './main/main.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';


const appRoutes:Routes = [
  {path : '', component:WelcomescreenComponent},
  {path :'gradecalculater',component:GradeCallComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    GradeCallComponent,
    MainComponent,
    WelcomescreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
