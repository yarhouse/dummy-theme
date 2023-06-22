import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingDataTemplateComponent } from './loading-data-template.component';


@NgModule({
    declarations: [
        LoadingDataTemplateComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingDataTemplateComponent
    ]
})
export class LoadingDataTemplateModule { }
