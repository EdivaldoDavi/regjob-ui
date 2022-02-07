import { CadastroComponent } from '../cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../seguranca/auth.guard';


const routes: Routes = [
  {
  path: '',
  component: CadastroComponent,
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
  export class CadastrosRoutingModule { }
