import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './Addvertsment.routing';
import { SharedModule } from '../../shared/shared.module';
import { AddvertsmentComponent } from './Addvertsment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdvirtesmentServices } from '../../shared/providers/Advirtesment.service.';

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
        AddvertsmentComponent
    ]
    ,
    providers:[AdvirtesmentServices]
})
export class AddvertsmentModule { }
