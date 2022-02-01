
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
import { CoreModule } from './core/core.module';
import { TableModule } from 'primeng/table';

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
    LancamentosModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,

  ],
  providers: [ MessageService,   ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
