import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {ApiService} from './api-services/api.service';
import {RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComComponent } from './Team/team-com/team-com.component';
import { Page404Component } from './page404/page404.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrouphomepageComponent } from './Group/grouphomepage/grouphomepage.component';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'team', component: TeamComComponent},
  { path: 'signUp', component: SignUpComponent },
  { path: 'group', component: GrouphomepageComponent },
  {path: '**', component: Page404Component}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    TeamComComponent,
    Page404Component,
    GrouphomepageComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
