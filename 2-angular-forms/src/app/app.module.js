"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var form_component_1 = require('./form.component');
var question_component_1 = require('./question.component');
var form_view_component_1 = require('./form-view.component');
var form_view_component_2 = require("./form-view.component");
var form_fill_component_1 = require("./form-fill.component");
var form_service_1 = require("./form.service");
var submissions_component_1 = require("./submissions.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'fillTheForm',
                        component: form_fill_component_1.FormFillComponent
                    },
                    {
                        path: 'formCreator',
                        component: form_component_1.FormComponent
                    },
                    {
                        path: '',
                        redirectTo: '/formCreator',
                        pathMatch: 'full'
                    },
                    {
                        path: 'submissions',
                        component: submissions_component_1.SubmissionsComponent
                    },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                form_component_1.FormComponent,
                question_component_1.QuestionComponent,
                form_view_component_1.FormViewComponent,
                form_view_component_2.NotDummy,
                form_fill_component_1.FormFillComponent,
                submissions_component_1.SubmissionsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [form_service_1.FormService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map