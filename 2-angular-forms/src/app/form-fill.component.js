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
var question_component_1 = require("./question.component");
var form_service_1 = require("./form.service");
var FormFillComponent = (function () {
    function FormFillComponent(formService) {
        this.formService = formService;
    }
    FormFillComponent.prototype.ngOnInit = function () {
        this.form = this.formService.getForm();
        console.log(this.form);
    };
    FormFillComponent.prototype.getAnswerValues = function (question) {
        var answers = [];
        if (question.selectedAnswer) {
            if (question.type === 'checkbox') {
                for (var _i = 0, _a = question.selectedAnswer; _i < _a.length; _i++) {
                    var id = _a[_i];
                    answers.push(question.answers[+id - 1].value);
                }
            }
            else if (question.type === 'radio') {
                answers.push(question.answers[+question.selectedAnswer - 1].value);
            }
            else if (question.type === 'text') {
                answers.push(question.selectedAnswer);
            }
        }
        else {
            answers.push('No answer');
        }
        return answers;
    };
    FormFillComponent.prototype.saveAnswers = function () {
        var currentAnswers = [];
        for (var _i = 0, _a = this.form.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            currentAnswers.push([question.questionText, this.getAnswerValues(question)]);
        }
        this.formService.saveSubmission(currentAnswers);
        question_component_1.clearSelectedAnswers(this.form.questions);
    };
    FormFillComponent = __decorate([
        core_1.Component({
            selector: 'form-fill',
            template: "\n  <div class=\"question form-name\">\n    <h1>{{form.formName}}</h1>\n  </div>\n  <form-view [questions]=\"form.questions\"></form-view>\n  <div class=\"form-group\">\n    <a class=\"btn btn-success btn-block submit-form\" routerLink=\"/submissions\" (click)=\"saveAnswers()\">Submit</a>\n  </div>\n  ",
            styles: ["\n  "]
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], FormFillComponent);
    return FormFillComponent;
}());
exports.FormFillComponent = FormFillComponent;
//# sourceMappingURL=form-fill.component.js.map