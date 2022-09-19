import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenusizqComponent } from './components/menusizq/menusizq.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AreacontenidoComponent } from './components/areacontenido/areacontenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusizqComponent,
    ToolbarComponent,
    AreacontenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
