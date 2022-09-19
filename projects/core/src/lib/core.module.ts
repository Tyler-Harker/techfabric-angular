import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [
    CoreComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    CoreComponent,
    ButtonComponent
  ]
})
export class CoreModule { }
