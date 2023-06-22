import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions } from '@angular/material/checkbox';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorDefaultOptions } from '@angular/material/paginator';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioDefaultOptions } from '@angular/material/radio';
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MatSlideToggleDefaultOptions } from '@angular/material/slide-toggle';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarkModeService } from './services/dark-mode/dark-mode.service';


const matSnackbarDefaultOptions = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 4000,
    /** The horizontal position to place the snack bar. */
    horizontalPosition: 'center',
    /** The vertical position to place the snack bar. */
    verticalPosition: 'bottom',
    panelClass: [
      'alert', 'allogy-alert'
    ]
  } as MatSnackBarConfig
};
const matCheckboxDefaultOptions = {
  provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
  useValue: { color: 'primary' } as MatCheckboxDefaultOptions,
};
const matRadioDefaultOptions = {
  provide: MAT_RADIO_DEFAULT_OPTIONS,
  useValue: { color: 'primary' } as MatRadioDefaultOptions,
};
const matSlideToggleDefaultOptions = {
  provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
  useValue: { color: 'primary' } as MatSlideToggleDefaultOptions,
};
const matFormFieldDefaultOptions = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {
    appearance: 'fill',
    hideRequiredMarker: false,

  } as MatFormFieldDefaultOptions,
};
const matPaginatorDefaultOptions = {
  provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
  useValue: {
    formFieldAppearance: 'legacy',
    pageSizeOptions: [25, 50, 100],
    showFirstLastButtons: true,
  } as MatPaginatorDefaultOptions,
};
const matDialogDefaultOptions = {
  provide: MAT_DIALOG_DEFAULT_OPTIONS,
  useValue: {
    width: '80vw',
    maxWidth: '500px',
    position: { top: '50px' },
    hasBackdrop: true
  } as MatDialogConfig,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      resetTimeoutOnDuplicate: true
    }),
  ],
  providers: [
    DarkModeService,
    matSnackbarDefaultOptions,
    matCheckboxDefaultOptions,
    matRadioDefaultOptions,
    matSlideToggleDefaultOptions,
    matFormFieldDefaultOptions,
    matPaginatorDefaultOptions,
    matDialogDefaultOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
