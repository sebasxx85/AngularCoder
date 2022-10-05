import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './components/directiva/directiva.component';

import { MenusizqComponent } from './components/menusizq/menusizq.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AreacontenidoComponent } from './components/areacontenido/areacontenido.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenusizqComponent,
    ToolbarComponent,
    AreacontenidoComponent,
    DirectivaComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
