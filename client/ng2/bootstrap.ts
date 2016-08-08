/// <reference path="../typings/index.d.ts" />

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
.catch((err: any) => console.error(err));;
