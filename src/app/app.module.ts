

import { Routes, RouterModule } from '@angular/router';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { CoreModule } from './core/core.module';
import { TableModule } from 'primeng/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    SegurancaModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    MatStepperModule,
    CadastrosModule,
    LancamentosModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ MessageService,   ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
