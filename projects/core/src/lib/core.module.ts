import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { SliderComponent } from './components/slider/slider.component';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [
    CoreComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExpanderComponent,
    SliderComponent
  ],
  imports: [
  ],
  exports: [
    CoreComponent,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    ExpanderComponent,
    SliderComponent
  ]
})
export class CoreModule { }
