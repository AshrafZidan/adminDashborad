import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './Users.routing';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './Users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
 import { UsersServices } from '../../shared/providers/Users.service.1';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,

        routing
    ],
    declarations: [
        UsersComponent
    ]
    ,
    providers:[UsersServices]
})
export class UsersModule { }
