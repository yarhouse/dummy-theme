import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/angular-material.module';
import { TypographyExampleComponent } from './typography-example.component';



@NgModule({
  declarations: [
    TypographyExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: TypographyExampleComponent,
    }]),
    MaterialModule,
  ]
})
export class TypographyExampleModule { }
