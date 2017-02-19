/**
 * Created by rusdka on 15.02.2017.
 */
import { Component, Input, OnInit, Pipe, Injectable, PipeTransform } from "@angular/core";
import { Question, Answer } from "./question.component";

@Pipe({
  name: 'notDummy',
  pure: false
})
@Injectable()
export class NotDummy implements PipeTransform {
  transform(items: any[], args: any[]): any {
    return items.filter(item => !item.isDummy);
  }
}

@Component({
  selector: "form-view",
  styles: [``],
  template: `
    <form class="question" *ngFor="let question of questions | notDummy">
      <div *ngIf="!question.isDummy">
        <legend>{{question.questionText}}</legend>
        
      <!--Radio and check input answers-->
        <fieldset class="form-group" *ngIf="question.type != 'text'">  
            <div class="form-check" *ngFor="let answer of question.answers | notDummy; let index = index;">
              <label class="form-check-label">
                <input 
                  name="Question {[question.id]} answers" 
                  class="form-check-input" 
                  id="option-{{index}}" 
                  [type]="question.type"
                  [value]="answer.id"
                  (click)="select(question, answer)">
                {{answer.value}}
              </label>
            </div>
        </fieldset>
      <!--Radio and check input answers end-->
      
      <!--Text answer -->
        <div class="form-group">
          <input type="text" class="form-control" 
          *ngIf="question.type === 'text'" 
          placeholder="Your answer"
          [(ngModel)]="question.selectedAnswer"
          [ngModelOptions]="{standalone: true}">
        </div>
      <!--Text answer end-->
      
      </div>
    </form>
`
})
export class FormViewComponent{
  @Input()
  questions: Question[];

  selectedAnswers: any[] = [];

  includes(array: any[], element:any) :boolean {
    return array.find(answer => answer === element) != null;
  }

  select(question: Question, answer: Answer) :void {
    if (question.type == "radio") {
      question.selectedAnswer = answer.id;
    }
    else if (question.type == "checkbox") {
      if (!question.selectedAnswer) {
        question.selectedAnswer = []
      }
      if (!this.includes(question.selectedAnswer, answer.id)) {
        question.selectedAnswer.push(answer.id);
      } else {
        question.selectedAnswer.splice(question.selectedAnswer.indexOf(answer.id), 1);
      }
    }
    console.log(question.selectedAnswer);
  }
}
