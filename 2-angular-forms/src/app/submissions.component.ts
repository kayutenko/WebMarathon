/**
 * Created by rusdka on 19.02.2017.
 */
import { Component, OnInit, Input} from "@angular/core";
import {Question, Answer} from "./question.component";
import {Form} from "./form.component";
import {FormService} from "./form.service";

@Component({
  selector: 'submissions',
  template: `
  <div class="question form-name">
    <h1>Submissions for "{{form.formName}}"</h1>
  </div>  
  
  <div class="question" *ngFor="let submission of submissions">
    <ul>
      <li *ngFor="let question of submission">
        <h4>{{question[0]}}</h4>
        <ul>
          <li *ngFor="let answer of question[1]">{{answer}}</li>
        </ul>
      </li>
    </ul> 
  </div>
  
  <div class="form-group">
    <a class="btn btn-success btn-block submit-form" routerLink="/fillTheForm">Add another submission</a>
  </div>
`
})
export class SubmissionsComponent implements OnInit {
  constructor(private formService: FormService) {}

  submissions: any[];
  form: Form;

  ngOnInit():void {
    this.submissions = this.formService.getSubmissions();
    this.form = this.formService.getForm();
  }

}
