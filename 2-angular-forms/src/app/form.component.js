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
 * Created by rusdka on 11.02.2017.
 */
var core_1 = require("@angular/core");
var question_component_1 = require("./question.component");
var form_service_1 = require("./form.service");
var Form = (function () {
    function Form() {
    }
    return Form;
}());
exports.Form = Form;
var FormComponent = (function () {
    function FormComponent(formService) {
        this.formService = formService;
        this.questionList = [];
        this.currentView = "editor";
    }
    FormComponent.prototype.addDummy = function () {
        this.questionList.push({
            id: -1,
            questionText: "",
            answers: [
                {
                    id: 1,
                    value: "new Answer",
                    isSelected: false,
                    isDummy: false
                }
            ],
            type: 'radio',
            selectedAnswer: null,
            isDummy: true
        });
    };
    FormComponent.prototype.createNewQuestion = function (questionText) {
        var current_dummy = this.questionList[this.questionList.length - 1];
        current_dummy.isDummy = false;
        current_dummy.id = this.questionList.length;
        if (questionText) {
            current_dummy.questionText = questionText;
        }
        else {
            current_dummy.questionText = "Question " + current_dummy.id;
        }
        this.addDummy();
    };
    FormComponent.prototype.ngOnInit = function () {
        this.addDummy();
        this.createNewQuestion('Untitled question');
    };
    FormComponent.prototype.toggleView = function (view) {
        this.currentView = view;
    };
    //
    //   clearSelectedAnswers(): void{
    //     for (let question of this.questionList) {
    //       if (question.type === 'checkbox') {
    //         question.selectedAnswer = []
    //       } else {
    //         question.selectedAnswer = null
    //       }
    //     }
    //
    // }
    FormComponent.prototype.saveForm = function () {
        question_component_1.clearSelectedAnswers(this.questionList);
        var currentFormName = this.formName;
        if (!this.formName) {
            currentFormName = 'Untitled Form';
        }
        var savedForm = {
            formName: currentFormName,
            questions: this.questionList.filter(function (q) { return !q.isDummy; }),
        };
        console.log(savedForm);
        this.formService.saveForm(savedForm);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "my-form",
            template: "\n    <!--Form name-->\n    <form>\n      <div class=\"form-group\">\n        <input name=\"New form\" [(ngModel)]=\"formName\" \n        type=\"text\" class=\"form-control\" placeholder=\"Name of the form\" value=\"New Form\">\n      </div>\n    </form>\n    <!--Form name end--> \n    \n    <!--View toggle buttons -->\n    <div class=\"btn-group view-toggle\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-secondary\" \n      [class.active]=\"currentView === 'editor'\" \n      (click)=\"toggleView('editor')\">Form editor</button>\n      <button type=\"button\" class=\"btn btn-secondary\" \n      [class.active]=\"currentView === 'preview'\" \n      (click)=\"toggleView('preview')\">Preview</button>\n    </div>\n    <!--View toggle buttons end -->\n    \n    <!--Question creator forms-->\n    <div *ngIf=\"currentView === 'editor'\">\n      <form class=\"question\" *ngFor = \"let question of questionList; let i = index\">\n        <question *ngIf=\"!question.isDummy\" [question]=\"question\"></question>\n        <question \n          *ngIf=\"question.isDummy\" \n          (add)=\"createNewQuestion(question.questionText)\"  \n          (keyup.enter)=\"createNewQuestion(question.questionText)\" \n          [question]=\"question\"></question>\n      </form>\n    </div>\n    <!--Question creator forms end-->\n    \n    <!--Created form preview -->\n    <form-view *ngIf=\"currentView === 'preview'\" [questions]=\"questionList\"></form-view>\n    <!--Created form preview end-->\n    \n    <!--Save form button-->\n    <form class=\"question\">\n      <div class=\"form-group\">\n        <a class=\"btn btn-success\" (click)=\"saveForm()\"  routerLink=\"/fillTheForm\">Finish and save</a>\n      </div>\n    </form>\n    <!--Save form button end-->\n",
            styles: ["\n    .view-toggle {\n    width: 100%;\n    margin-bottom: 15px;\n    }\n    \n    .view-toggle button {\n      width: 50%;\n      padding: 15px;\n      font-size: 13pt;\n      font-weight: 600;\n      color: #234d6a;\n    \n    }\n    "]
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map