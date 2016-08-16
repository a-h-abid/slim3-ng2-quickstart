import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app.component';
import { FrontendModule } from '../frontend/frontend.module';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FrontendModule, routing ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
