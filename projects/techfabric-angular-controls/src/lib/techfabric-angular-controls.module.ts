import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TechfabricAngularControlsComponent } from './techfabric-angular-controls.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TfInputComponent, TfButtonComponent }from './components';

let components = [
  TfButtonComponent,
  TfInputComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ...components
  ]
})
export class TechfabricAngularControlsModule { }
