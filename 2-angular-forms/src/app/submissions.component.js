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
/**
 * Created by rusdka on 19.02.2017.
 */
var core_1 = require("@angular/core");
var form_service_1 = require("./form.service");
var SubmissionsComponent = (function () {
    function SubmissionsComponent(formService) {
        this.formService = formService;
    }
    SubmissionsComponent.prototype.ngOnInit = function () {
        this.submissions = this.formService.getSubmissions();
        this.form = this.formService.getForm();
    };
    SubmissionsComponent = __decorate([
        core_1.Component({
            selector: 'submissions',
            template: "\n  <div class=\"question form-name\">\n    <h1>Submissions for \"{{form.formName}}\"</h1>\n  </div>  \n  \n  <div class=\"question\" *ngFor=\"let submission of submissions\">\n    <ul>\n      <li *ngFor=\"let question of submission\">\n        <h4>{{question[0]}}</h4>\n        <ul>\n          <li *ngFor=\"let answer of question[1]\">{{answer}}</li>\n        </ul>\n      </li>\n    </ul> \n  </div>\n  \n  <div class=\"form-group\">\n    <a class=\"btn btn-success btn-block submit-form\" routerLink=\"/fillTheForm\">Add another submission</a>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], SubmissionsComponent);
    return SubmissionsComponent;
}());
exports.SubmissionsComponent = SubmissionsComponent;
//# sourceMappingURL=submissions.component.js.map