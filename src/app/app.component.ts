import { Component } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(){
		document.body.style.padding = "0";
		document.body.style.margin = "0";
		document.body.style.top = "0";
		document.body.style.left = "0";
	}
}
