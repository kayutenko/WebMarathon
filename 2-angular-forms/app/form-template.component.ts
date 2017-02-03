import { Component, ViewChild, ViewChildren } from "@angular/core";

export class Answer {
	id: number;
	value: string;
}

@Component ({
	selector: 'form-template',
	moduleId: module.id,
	templateUrl: './templates/form-template.component.html',
	styles: [`
	.form-template {
		border: 2px solid blue;
		border-radius: 10px;
		padding: 10px;
		width: 500px;
	}
	`]
})
export class FormTemplateComponent {
	
	question: string = '';
	questionFormValue: string = '';	


	// buttonName = "Submit";

	possibleAnswers: Answer[] = [
		{id: 1, value: "Answer 1"}
	];

	toggleQuestion(value: string) :void {
		if (!this.question) 
		{
			this.question = value;
			this.questionFormValue = value;	
			// if (this.question) 
				// {this.buttonName = "Change";}
		} else {
			this.question = ''
			// this.buttonName = "Submit";
		}
	}

	focusLost(value: string): void {
		if (!this.question) { this.toggleQuestion(value) }		
	}

	addAnswer(lastAnswer): void {
		var id = this.possibleAnswers.length + 1;		
		this.possibleAnswers.push({id: id, value: "Answer " + id});
		
	}


}