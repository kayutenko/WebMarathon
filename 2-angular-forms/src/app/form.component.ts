/**
 * Created by rusdka on 11.02.2017.
 */
import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Question, Answer} from "./question.component";
import {FormService} from "./form.service";

export class Form {
  formName: string;
  questions: Question[];
}

@Component({
  selector: "my-form",
  template: `
    <!--Form name-->
    <form>
      <div class="form-group">
        <input name="New form" [(ngModel)]="formName" 
        type="text" class="form-control" placeholder="Name of the form" value="New Form">
      </div>
    </form>
    <!--Form name end--> 
    
    <!--View toggle buttons -->
    <div class="btn-group view-toggle" role="group">
      <button type="button" class="btn btn-secondary" 
      [class.active]="currentView === 'editor'" 
      (click)="toggleView('editor')">Form editor</button>
      <button type="button" class="btn btn-secondary" 
      [class.active]="currentView === 'preview'" 
      (click)="toggleView('preview')">Preview</button>
    </div>
    <!--View toggle buttons end -->
    
    <!--Question creator forms-->
    <div *ngIf="currentView === 'editor'">
      <form class="question" *ngFor = "let question of questionList; let i = index">
        <question *ngIf="!question.isDummy" [question]="question"></question>
        <question 
          *ngIf="question.isDummy" 
          (add)="createNewQuestion(question.questionText)"  
          (keyup.enter)="createNewQuestion(question.questionText)" 
          [question]="question"></question>
      </form>
    </div>
    <!--Question creator forms end-->
    
    <!--Created form preview -->
    <form-view *ngIf="currentView === 'preview'" [questions]="questionList"></form-view>
    <!--Created form preview end-->
    
    <!--Save form button-->
    <form class="question">
      <div class="form-group">
        <a class="btn btn-success" (click)="saveForm()"  routerLink="/fillTheForm">Finish and save</a>
      </div>
    </form>
    <!--Save form button end-->
`,
  styles: [`
    .view-toggle {
    width: 100%;
    margin-bottom: 15px;
    }
    
    .view-toggle button {
      width: 50%;
      padding: 15px;
      font-size: 13pt;
      font-weight: 600;
      color: #234d6a;
    
    }
    `]
})
export class FormComponent implements OnInit{

  formName: string;
  questionList: Question[] = [];
  currentView: string = "editor";

  constructor(private formService: FormService) {}

  addDummy(): void {
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
    })
  }

  createNewQuestion(questionText: string): void {
    let current_dummy = this.questionList[this.questionList.length - 1];
    current_dummy.isDummy = false;
    current_dummy.id = this.questionList.length;
    if (questionText) {
      current_dummy.questionText = questionText
    }
    else {
      current_dummy.questionText = "Question " + current_dummy.id
    }
    this.addDummy();
  }

  ngOnInit(): void {
    this.addDummy();
    this.createNewQuestion('Untitled question');
  }

  toggleView(view:string):void {
      this.currentView = view;
  }

  saveForm():void {
    let currentFormName: string = this.formName;
    if (!this.formName) {
      currentFormName = 'Untitled Form';
    }
    let savedForm: Form = {
      formName: currentFormName,
      questions: this.questionList.filter(q => !q.isDummy),
    };
    console.log(savedForm);
    this.formService.saveForm(savedForm);
  }
}
