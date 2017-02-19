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
var Question = (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;
var QuestionComponent = (function () {
    function QuestionComponent() {
        this.add = new core_1.EventEmitter();
    }
    QuestionComponent.prototype.addMe = function (questionText) {
        this.add.emit(null);
    };
    QuestionComponent.prototype.addAnswer = function (index) {
        if (index + 1 === this.question.answers.length) {
            var id = this.question.answers.length + 1;
            var currentAnswer = this.question.answers[id - 2];
            currentAnswer.value = "Answer " + (id - 1);
            currentAnswer.isDummy = false;
            var answerDummy = {
                id: id,
                value: "Add new answer...",
                isSelected: false,
                isDummy: true
            };
            this.question.answers.push(answerDummy);
        }
    };
    QuestionComponent.prototype.delAnswer = function (index) {
        this.question.answers.splice(index, 1);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], QuestionComponent.prototype, "add", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Question)
    ], QuestionComponent.prototype, "question", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: "question",
            template: "\n    <form>\n      <div class=\"row\">\n      <!--Text of the question-->\n        <div  class=\" col-xl-9 col-lg-8 col-md-8 col-sm-12\">\n          <div class=\"form-group\">\n            <input name=\"QuestionText\" [(ngModel)]=\"question.questionText\" id=\"question-{{question.id}}\" type=\"text\" class=\"form-control\" placeholder=\"Question text...\">\n            <small *ngIf=\"question.isDummy\" class=\"form-text text-muted\">Add the question here</small>\n          </div>\n        </div>\n      <!--Text of the question end-->\n      \n      <!--Type of the question selector  -->\n        <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-12 type-select\">\n          <div class=\"form-group\"> \n            <select name=\"typeSelect\" [(ngModel)]=\"question.type\" class=\"form-control\" id=\"typeSelect\">\n                <option disabled selected value=\"dummy\">Answer type</option>\n                <option value=\"radio\">Single option</option>\n                <option value=\"checkbox\">Multiple choice</option>\n                <option value=\"text\">Text answer</option>\n            </select>\n          </div>\n        </div>\n      <!--Type of the question selector end -->\n      </div>\n      \n    <!--Add button for dummy question-->\n      <div class=\"form-group\" *ngIf=\"question.isDummy\" >\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addMe(question.questionText)\">Add question</button>\n      </div>\n    <!--Add button for dummy question end-->\n      \n     <!--List of possible answers form radio and checkbox type questions-->\n      <div *ngIf=\"!question.isDummy\">\n      \n        <fieldset *ngIf=\"question.type != 'text'\" class=\"form-group\" >\n          <legend>Possible answers:</legend>       \n          <div  class=\"form-check\" *ngFor=\"let answer of question.answers; let index = index;\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                  <input type=\"{{question.type}}\" name=\"answers\" value=\"{{answer.id}}\">\n                </span>\n                <input  name=\"AnswerInput {{index}}\" [(ngModel)]=\"answer.value\" id=\"answer-{{answer.id}}\"\n                (click)=\"addAnswer(index)\" (keyup.enter)=\"addAnswer(index)\" \n                type=\"text\" class=\"form-control\" placeholder=\"New answer\">\n                \n                <span class=\"input-group-btn\">\n                  <button *ngIf=\"!answer.isDummy && question.answers.length > 2\" \n                  class=\"btn btn-secondary\" type=\"button\" (click)=\"delAnswer(index)\">\n                  x\n                  </button>\n                </span>\n\n              </div>\n          </div>\n        </fieldset>\n      <!--List of possible answers form radio and checkbox type questions end-->\n        \n      <!--Answer for text type questions-->\n        <div class=\"form-group\" *ngIf=\"question.type === 'text'\">\n          <input name=\"QuestionAnswer\"  type=\"text\" class=\"form-control\" placeholder=\"User answer...\">\n        </div>  \n      <!--Answer for text type questions end-->\n      \n      </div>\n     <!--List of possible answers end-->\n           \n    </form>\n",
            styles: ["\n  @media all and (min-width: 768px) {\n     .type-select {\n        padding-left: 0;\n      } \n  }\n\n  .type-select .form-control {\n    background: rgba(2, 90, 165, 0.32);\n    color: #1f476b;\n    font-weight: bold;\n  }\n  \n  .answer-input {\n    width: 100%;\n  }\n \n"]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map