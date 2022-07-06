import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadCardComponent } from './components/load-card/load-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { TimeFormaterPipe } from './time-formater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoadCardComponent,
    ModalComponent,
    TimeFormaterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
