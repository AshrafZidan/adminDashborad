import { LayoutModule } from './../../shared/layout.module';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
 
/* components */
@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        
    ] 
})
export class LoginModule { }
