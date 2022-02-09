import { CandidatoCadastroComponent } from './candidato-cadastro/candidato-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';


const routes: Routes = [
  {
  path: '',
  component: CandidatoCadastroComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_CADASTRAR_CANDIDATO'] }
  }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class CandidatosRoutingModule { }
