import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { FormComponent }  from './form.component';
import { QuestionComponent }  from './question.component';
import { FormViewComponent } from './form-view.component';
import {NotDummy} from "./form-view.component";
import {FormFillComponent} from "./form-fill.component";
import {FormService} from "./form.service";
import {SubmissionsComponent} from "./submissions.component"


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'fillTheForm',
        component: FormFillComponent
      },
      {
        path: 'formCreator',
        component: FormComponent
      },
      {
        path: '',
        redirectTo: '/formCreator',
        pathMatch: 'full'
      },
      {
        path: 'submissions',
        component: SubmissionsComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    FormComponent,
    QuestionComponent,
    FormViewComponent,
    NotDummy,
    FormFillComponent,
    SubmissionsComponent],
  bootstrap:    [ AppComponent ],
  providers: [FormService]
})
export class AppModule {}
