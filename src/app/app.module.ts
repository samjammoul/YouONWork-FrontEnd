import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Page404Component } from './page404/page404.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TeamsComponent } from './Team/teams/teams.component';
import {TokenInterceptorService} from './Auth/token-interceptor/TokenInterceptorService';
import {TeamHandlerService} from './Team/TeamServ/team-handler.service';
import {AuthGuardService} from './Auth/Auth-guard/auth-guard.service';
import {MatListModule} from '@angular/material/list';
import { TaskComponent } from './Team/Dashboard/task/task.component';
import { StatusComponent } from './Team/Dashboard/status/status.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TeamDashBoardComponent} from './Team/Dashboard/team-dashoard/team-dash-board.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UserHandlerService} from './login/UserHandler/user-handler.service';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
   { path: 'teams', component: TeamsComponent, canActivate: [AuthGuardService] },
    { path: 'dashboard/:id', component: TeamDashBoardComponent, canActivate: [AuthGuardService] },
  {path: '**', component: Page404Component}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    Page404Component,
    TeamsComponent,
    TeamDashBoardComponent,
    TaskComponent,
    StatusComponent,




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
        MatListModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
      multi: true
}, TeamHandlerService], bootstrap: [AppComponent]
})
export class AppModule { }
