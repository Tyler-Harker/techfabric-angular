import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExpanderComponent,
    SliderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DragDropModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExpanderComponent,
    SliderComponent,
    NavbarComponent
  ]
})
export class TechfabricModule { }
