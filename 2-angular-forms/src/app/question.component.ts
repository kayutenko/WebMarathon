/**
 * Created by rusdka on 11.02.2017.
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";

export class Question {
  id: number;
  questionText: string;
  answers: Answer[];
  type: string;
  selectedAnswer: any;
  isDummy: boolean;
}

export class Answer {
  id: any;
  value: string;
  isSelected: boolean;
  isDummy: boolean;
}

@Component({
  selector: "question",
  template:
`
    <form>
      <div class="row">
      <!--Text of the question-->
        <div  class=" col-xl-9 col-lg-8 col-md-8 col-sm-12">
          <div class="form-group">
            <input name="QuestionText" [(ngModel)]="question.questionText" id="question-{{question.id}}" type="text" class="form-control" placeholder="Question text...">
            <small *ngIf="question.isDummy" class="form-text text-muted">Add the question here</small>
          </div>
        </div>
      <!--Text of the question end-->
      
      <!--Type of the question selector  -->
        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 type-select">
          <div class="form-group"> 
            <select name="typeSelect" [(ngModel)]="question.type" class="form-control" id="typeSelect">
                <option disabled selected value="dummy">Answer type</option>
                <option value="radio">Single option</option>
                <option value="checkbox">Multiple choice</option>
                <option value="text">Text answer</option>
            </select>
          </div>
        </div>
      <!--Type of the question selector end -->
      </div>
      
    <!--Add button for dummy question-->
      <div class="form-group" *ngIf="question.isDummy" >
        <button class="btn btn-primary" (click)="addMe(question.questionText)">Add question</button>
      </div>
    <!--Add button for dummy question end-->
      
     <!--List of possible answers form radio and checkbox type questions-->
      <div *ngIf="!question.isDummy">
      
        <fieldset *ngIf="question.type != 'text'" class="form-group" >
          <legend>Possible answers:</legend>       
          <div  class="form-check" *ngFor="let answer of question.answers; let index = index;">
              <div class="input-group">
                <span class="input-group-addon">
                  <input type="{{question.type}}" name="answers" value="{{answer.id}}">
                </span>
                <input  name="AnswerInput {{index}}" [(ngModel)]="answer.value" id="answer-{{answer.id}}"
                (click)="addAnswer(index)" (keyup.enter)="addAnswer(index)" 
                type="text" class="form-control" placeholder="New answer">
                
                <span class="input-group-btn">
                  <button *ngIf="!answer.isDummy && question.answers.length > 2" 
                  class="btn btn-secondary" type="button" (click)="delAnswer(index)">
                  x
                  </button>
                </span>

              </div>
          </div>
        </fieldset>
      <!--List of possible answers form radio and checkbox type questions end-->
        
      <!--Answer for text type questions-->
        <div class="form-group" *ngIf="question.type === 'text'">
          <input name="QuestionAnswer"  type="text" class="form-control" placeholder="User answer...">
        </div>  
      <!--Answer for text type questions end-->
      
      </div>
     <!--List of possible answers end-->
           
    </form>
`,
  styles: [`
  @media all and (min-width: 768px) {
     .type-select {
        padding-left: 0;
      } 
  }

  .type-select .form-control {
    background: rgba(2, 90, 165, 0.32);
    color: #1f476b;
    font-weight: bold;
  }
  
  .answer-input {
    width: 100%;
  }
 
`]
})
export class QuestionComponent {
  @Output() add: EventEmitter<any> = new EventEmitter();

  @Input()
  question: Question;

  addMe(questionText:string): void {
    this.add.emit(null)
  }

  addAnswer(index: number): void {
    if (index + 1 === this.question.answers.length) {
      let id = this.question.answers.length + 1;
      let currentAnswer = this.question.answers[id - 2];
      currentAnswer.value = "Answer " + (id - 1);
      currentAnswer.isDummy = false;
      let answerDummy: Answer = {
        id: id,
        value: "Add new answer...",
        isSelected: false,
        isDummy: true
      };
      this.question.answers.push(answerDummy);
    }
  }

  delAnswer(index: number): void {
    this.question.answers.splice(index, 1);
  }

}
