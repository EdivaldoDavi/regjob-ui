import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService }  from '../services/ticketservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrosRoutingModule } from './cadastro/cadastro-routing.modules';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    CadastroComponent


  ],
 	providers: [
		TicketService
	],
  imports: [
    CommonModule,
	 	TabViewModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule,
    CadastrosRoutingModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CadastrosModule { }
