import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../Pages/login/login.component';
import { HomeComponent } from '../Pages/home/home.component'; 
import { ReactiveFormsModule} from '@angular/forms'; 
import { AuthService } from '../Pages/login/auth.service';
import { FormsModule } from '@angular/forms'; 


const root = [
 { path: 'home', component: HomeComponent},
 { path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(root),
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
