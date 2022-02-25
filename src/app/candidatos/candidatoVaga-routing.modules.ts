import  { CandidatoVagaComponent } from './candidato-vaga/candidato-vaga.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';



const routes: Routes = [
  {
  path: 'candidatoVaga/:id',
  component: CandidatoVagaComponent,
    canActivate: [ AuthGuard ],
    data: { roles: ['ROLE_CADASTRAR_CANDIDATO'] }
  },

  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class CandidatoVagaRoutingModule { }
