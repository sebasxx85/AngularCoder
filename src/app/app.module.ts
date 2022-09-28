import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenusizqComponent } from './components/menusizq/menusizq.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AreacontenidoComponent } from './components/areacontenido/areacontenido.component';
import { DirectivaComponent } from './components/directiva/directiva.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusizqComponent,
    ToolbarComponent,
    AreacontenidoComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
