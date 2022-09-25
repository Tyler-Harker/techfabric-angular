import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MsalNgrxModule } from '@techfabric/msal-ngrx';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInFormComponent } from './components/signInForm/signInForm.component';
import { SignUpFormComponent } from './components/signUpForm/signUpForm.component';
import { SliderComponent } from './components/slider/slider.component';
import { UnauthorizedLayoutComponent } from './layouts/unauthorizedLayout/unauthorizedLayout.component';
import { SignInPageComponent } from './pages/signInPage/signInPage.component';
import { SignUpPageComponent } from './pages/signUpPage/signUpPage.component';
import { ConfigurationModule } from './store/configuration/configuration.module';
import { SignInPageModule } from './store/signIn/signInPageModule';




let components = [
  ButtonComponent,
  CardComponent,
  CheckboxComponent,
  ExpanderComponent,
  SliderComponent,
  NavbarComponent,
  SignInFormComponent,
  SignInPageComponent,
  InputComponent,
  FooterComponent,
  SignUpFormComponent,
  SignUpPageComponent,
  UnauthorizedLayoutComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    BrowserModule,
    DragDropModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationModule,
    SignInPageModule,
    RouterModule.forChild([
      {path: 'signIn', component: SignInPageComponent},
      {path: 'signUp', component: SignUpPageComponent}
    ]),
    MsalNgrxModule
  ],
  exports: components
})
export class TechfabricModule {
  
 } 
