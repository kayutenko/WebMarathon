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
var core_1 = require("@angular/core");
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;
var FormTemplateComponent = (function () {
    function FormTemplateComponent() {
        this.question = '';
        this.questionFormValue = '';
        // buttonName = "Submit";
        this.possibleAnswers = [
            { id: 1, value: "Answer 1" }
        ];
    }
    FormTemplateComponent.prototype.toggleQuestion = function (value) {
        if (!this.question) {
            this.question = value;
            this.questionFormValue = value;
        }
        else {
            this.question = '';
        }
    };
    FormTemplateComponent.prototype.focusLost = function (value) {
        if (!this.question) {
            this.toggleQuestion(value);
        }
    };
    FormTemplateComponent.prototype.addAnswer = function (lastAnswer) {
        var id = this.possibleAnswers.length + 1;
        this.possibleAnswers.push({ id: id, value: "Answer " + id });
    };
    FormTemplateComponent = __decorate([
        core_1.Component({
            selector: 'form-template',
            moduleId: module.id,
            templateUrl: './templates/form-template.component.html',
            styles: ["\n\t.form-template {\n\t\tborder: 2px solid blue;\n\t\tborder-radius: 10px;\n\t\tpadding: 10px;\n\t\twidth: 500px;\n\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], FormTemplateComponent);
    return FormTemplateComponent;
}());
exports.FormTemplateComponent = FormTemplateComponent;
//# sourceMappingURL=form-template.component.js.map