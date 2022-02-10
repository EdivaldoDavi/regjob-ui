import {NgModule} from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import {  ReactiveFormsModule } from '@angular/forms';

import { CandidatosRoutingModule } from '../../app/candidatos/candidatos-routing.modules';
import { RouterModule } from '@angular/router';
import { CandidatoCadastroComponent } from './candidato-cadastro/candidato-cadastro.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CandidatoCadastroComponent,




  ],
 	providers: [

	],
  imports: [
    CommonModule,

    RouterModule,

    CandidatosRoutingModule,
    ToastModule,
	 	TabViewModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,


    MatStepperModule, MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    CurrencyMaskModule,
    SharedModule

  ]
})
export class CandidatosModule { }
