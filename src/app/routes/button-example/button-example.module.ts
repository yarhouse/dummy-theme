import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/angular-material.module';
import { ButtonExampleComponent } from './button-example.component';



@NgModule({
  declarations: [
    ButtonExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ButtonExampleComponent,
    }]),
  ]
})
export class ButtonExampleModule { }
