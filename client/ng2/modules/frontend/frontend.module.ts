import { NgModule }      from '@angular/core';
import { routing } from './frontend.routing';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { ContactComponent }  from './components/contact/contact.component';


@NgModule({
  imports:      [ routing ],
  declarations: [ HomeComponent, AboutComponent, ContactComponent ]
})
export class FrontendModule { }
