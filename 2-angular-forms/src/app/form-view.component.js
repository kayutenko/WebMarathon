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
 * Created by rusdka on 15.02.2017.
 */
var core_1 = require("@angular/core");
var NotDummy = (function () {
    function NotDummy() {
    }
    NotDummy.prototype.transform = function (items, args) {
        return items.filter(function (item) { return !item.isDummy; });
    };
    NotDummy = __decorate([
        core_1.Pipe({
            name: 'notDummy',
            pure: false
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotDummy);
    return NotDummy;
}());
exports.NotDummy = NotDummy;
var FormViewComponent = (function () {
    function FormViewComponent() {
        this.selectedAnswers = [];
    }
    FormViewComponent.prototype.includes = function (array, element) {
        return array.find(function (answer) { return answer === element; }) != null;
    };
    FormViewComponent.prototype.select = function (question, answer) {
        if (question.type == "radio") {
            question.selectedAnswer = answer.id;
        }
        else if (question.type == "checkbox") {
            if (!question.selectedAnswer) {
                question.selectedAnswer = [];
            }
            if (!this.includes(question.selectedAnswer, answer.id)) {
                question.selectedAnswer.push(answer.id);
            }
            else {
                question.selectedAnswer.splice(question.selectedAnswer.indexOf(answer.id), 1);
            }
        }
        console.log(question.selectedAnswer);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FormViewComponent.prototype, "questions", void 0);
    FormViewComponent = __decorate([
        core_1.Component({
            selector: "form-view",
            styles: [""],
            template: "\n    <form class=\"question\" *ngFor=\"let question of questions | notDummy\">\n      <div *ngIf=\"!question.isDummy\">\n        <legend>{{question.questionText}}</legend>\n        \n      <!--Radio and check input answers-->\n        <fieldset class=\"form-group\" *ngIf=\"question.type != 'text'\">  \n            <div class=\"form-check\" *ngFor=\"let answer of question.answers | notDummy; let index = index;\">\n              <label class=\"form-check-label\">\n                <input \n                  name=\"Question {[question.id]} answers\" \n                  class=\"form-check-input\" \n                  id=\"option-{{index}}\" \n                  [type]=\"question.type\"\n                  [value]=\"answer.id\"\n                  (click)=\"select(question, answer)\">\n                {{answer.value}}\n              </label>\n            </div>\n        </fieldset>\n      <!--Radio and check input answers end-->\n      \n      <!--Text answer -->\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" \n          *ngIf=\"question.type === 'text'\" \n          placeholder=\"Your answer\"\n          [(ngModel)]=\"question.selectedAnswer\"\n          [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      <!--Text answer end-->\n      \n      </div>\n    </form>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], FormViewComponent);
    return FormViewComponent;
}());
exports.FormViewComponent = FormViewComponent;
//# sourceMappingURL=form-view.component.js.map