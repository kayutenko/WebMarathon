/**
 * Created by rusdka on 19.02.2017.
 */
import { Component, OnInit, Input} from "@angular/core";
import {Question, Answer} from "./question.component";
import {Form} from "./form.component";
import {FormService} from "./form.service";

@Component({
  selector: 'form-fill',
  template: `
  <div class="question form-name">
    <h1>{{form.formName}}</h1>
  </div>
  <form-view [questions]="form.questions"></form-view>
  <div class="form-group">
    <a class="btn btn-success btn-block submit-form" routerLink="/submissions" (click)="saveAnswers()">Submit</a>
  </div>
  `,
  styles: [`
  `]
})
export class FormFillComponent implements OnInit {

  form: Form;

  constructor(private formService: FormService) {}

  ngOnInit():void {
    this.form = this.formService.getForm();
    console.log(this.form);
  }

  getAnswerValues(question: Question) {
    let answers: any[] = [];
    if (question.selectedAnswer) {
      if (question.type === 'checkbox') {
        for (let id of question.selectedAnswer) {
          answers.push(question.answers[+id - 1].value)
        }
      } else if (question.type === 'radio') {
        answers.push(question.answers[+question.selectedAnswer - 1].value)
      } else if (question.type === 'text') {
        answers.push(question.selectedAnswer)
      }
    } else {
      answers.push('No answer')
    }
    return answers
  }

  saveAnswers(): void {
    let currentAnswers: any[] = [];
    for (let question of this.form.questions) {
      currentAnswers.push([question.questionText, this.getAnswerValues(question)])
    }
    this.formService.saveSubmission(currentAnswers);
  }
}
