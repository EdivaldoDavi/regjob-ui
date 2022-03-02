

import { Routes, RouterModule } from '@angular/router';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AppRoutingModule } from './app-routing.modules';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { CandidatosModule } from './candidatos/candidatos.module';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { TesteModule } from './teste/teste.module';


const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    BrowserAnimationsModule,
    SegurancaModule,
    RouterModule,
    HttpClientModule,
    CoreModule,


    CandidatosModule,
    LancamentosModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    MatFileUploadModule

  ],
  providers: [ MessageService,   ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
