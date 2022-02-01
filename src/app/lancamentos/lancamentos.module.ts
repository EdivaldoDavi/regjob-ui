import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';


import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LancamentosRoutingModule } from './lancamentos-routing.modules';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    LancamentosRoutingModule,
    TableModule
  ],
  declarations: [

    LancamentosPesquisaComponent
  ],
  exports: [

  ]
})
export class LancamentosModule { }
