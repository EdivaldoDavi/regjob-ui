import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { RouterModule } from '@angular/router';
import { TesteRoutingModule } from './teste-routing.modules';

import { TabViewModule } from 'primeng/tabview';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import {  ReactiveFormsModule } from '@angular/forms';


import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete'

@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TesteRoutingModule,
    ToastModule,
	 	TabViewModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
    MatAutocompleteModule,

    MatStepperModule, MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    CurrencyMaskModule,
    SharedModule

  ],
  exports:[TesteComponent]
})
export class TesteModule { }
