import { Component, Input } from '@angular/core';

@Component({
    selector: "project",
    templateUrl: "./project.component.html",
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent{
    @Input() photoLeft: boolean = false;
    @Input() projectTitle: string = "Project title here";
    @Input() projectSummary: string = "Project summary goes here";
    @Input() projectDetails: string = "Here is some more info about the project, maybe it explains some of the pictures as well."

    constructor() {
    }
}