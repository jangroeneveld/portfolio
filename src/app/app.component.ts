import { Component } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	projects = [
		{ projectTitle: 'hoi', projectSummary: 'summary'},
		{ projectTitle: 'asdf', projectSummary: 'asdfsdf'},
		{ projectTitle: 'asdfasdfadsf', projectSummary: 'dfdf'},
		{ projectTitle: 'asdfasdfasdfasdfa', projectSummary: 'd'},
		{ projectTitle: 'asdf', projectSummary: 'a'},
	];
	constructor(){
		document.body.style.background = "#bbb";
	}

	
}
