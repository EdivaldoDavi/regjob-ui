import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';


const routes: Routes = [
  {
  path: 'pesquisar',
  component: LancamentosPesquisaComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_PESQUISAR_CANDIDATO'] }
  }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class LancamentosRoutingModule { }
