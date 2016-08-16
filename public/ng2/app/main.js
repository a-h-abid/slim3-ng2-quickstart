var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("modules/app/components/app.component", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "ng2";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-app',
                        template: '<h1>Welcome</h1><h3>I am {{name}}. Hi there.</h3><ul><li><a routerLink="/">Home</a></li><li><a routerLink="about">About</a></li><li><a routerLink="contact">Contact</a></li></ul><hr><div><router-outlet></router-outlet></div><footer>Copyright &copy; 2016</footer>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("modules/frontend/components/home/home.component", ['@angular/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var HomeComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_2.Component({
                        template: '<h1>Home</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_2("HomeComponent", HomeComponent);
        }
    }
});
System.register("modules/frontend/components/about/about.component", ['@angular/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3;
    var AboutComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_3.Component({
                        template: '<h1>About</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_3("AboutComponent", AboutComponent);
        }
    }
});
System.register("modules/frontend/components/contact/contact.component", ['@angular/core'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4;
    var ContactComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                }
                ContactComponent = __decorate([
                    core_4.Component({
                        template: '<h1>Contact</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_4("ContactComponent", ContactComponent);
        }
    }
});
System.register("modules/frontend/frontend.routing", ['@angular/router', "modules/frontend/components/home/home.component", "modules/frontend/components/about/about.component", "modules/frontend/components/contact/contact.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var router_1, home_component_1, about_component_1, contact_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
            ];
            exports_5("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
System.register("modules/frontend/frontend.module", ['@angular/core', "modules/frontend/frontend.routing", "modules/frontend/components/home/home.component", "modules/frontend/components/about/about.component", "modules/frontend/components/contact/contact.component"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5, frontend_routing_1, home_component_2, about_component_2, contact_component_2;
    var FrontendModule;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (frontend_routing_1_1) {
                frontend_routing_1 = frontend_routing_1_1;
            },
            function (home_component_2_1) {
                home_component_2 = home_component_2_1;
            },
            function (about_component_2_1) {
                about_component_2 = about_component_2_1;
            },
            function (contact_component_2_1) {
                contact_component_2 = contact_component_2_1;
            }],
        execute: function() {
            FrontendModule = (function () {
                function FrontendModule() {
                }
                FrontendModule = __decorate([
                    core_5.NgModule({
                        imports: [frontend_routing_1.routing],
                        declarations: [home_component_2.HomeComponent, about_component_2.AboutComponent, contact_component_2.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FrontendModule);
                return FrontendModule;
            }());
            exports_6("FrontendModule", FrontendModule);
        }
    }
});
System.register("modules/app/app.routing", ['@angular/router'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var router_2;
    var routes, routing;
    return {
        setters:[
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            routes = [];
            exports_7("routing", routing = router_2.RouterModule.forRoot(routes));
        }
    }
});
System.register("modules/app/app.module", ['@angular/core', '@angular/platform-browser', "modules/app/components/app.component", "modules/frontend/frontend.module", "modules/app/app.routing"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, platform_browser_1, app_component_1, frontend_module_1, app_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (frontend_module_1_1) {
                frontend_module_1 = frontend_module_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_6.NgModule({
                        imports: [platform_browser_1.BrowserModule, frontend_module_1.FrontendModule, app_routing_1.routing],
                        declarations: [app_component_1.AppComponent],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_8("AppModule", AppModule);
        }
    }
});
System.register("bootstrap", ['@angular/platform-browser-dynamic', "modules/app/app.module"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
