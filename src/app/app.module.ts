import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentcationServices } from './Auth.service';
import { Http, HttpModule } from '@angular/http';
import { NotificationComponent } from './pages/ui/components/notification/notification.component';
import { SafeUrlPipe } from './shared/providers/safe-url.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
    ReactiveFormsModule, FormsModule,
     
    PagesModule,
    HttpModule,
    
    routing,
  ],
  declarations: [
    AppComponent,
    SafeUrlPipe
  ],
  bootstrap: [AppComponent],
  providers:[AuthentcationServices , NotificationComponent ]
})
export class AppModule { }
