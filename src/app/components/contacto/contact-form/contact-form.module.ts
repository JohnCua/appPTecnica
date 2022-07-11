import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ModuleWithProviders } from '@angular/core'

import { ContactFormService } from './contact-form.service';



@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule
  ], 
  exports: [ContactFormComponent]
})
export class ContactFormModule {   

  static forRoot(config: ContactFormService): ModuleWithProviders<ContactFormModule> {
    return {
      ngModule: ContactFormModule,
      providers: [
        {provide: ContactFormService, useValue: config }
      ]
    };
  }
  }