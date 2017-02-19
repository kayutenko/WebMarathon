/**
 * Created by rusdka on 19.02.2017.
 */
import {Injectable} from "@angular/core";
import {Form} from "./form.component";

@Injectable()
export class FormService {

  form: Form;
  submissions: any[] = [];

  saveForm(form: Form): void {
    this.form = form;
  }

  getForm(): Form {
    return this.form;
  }

  saveSubmission(answers: any[]): void {
    this.submissions.push(answers)
  }

  getSubmissions(): any {
    return this.submissions;
  }
}
