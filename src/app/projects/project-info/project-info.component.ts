import { Component, Input } from '@angular/core';

@Component({
    selector: "project-info",
    templateUrl: "./project-info.component.html",
    styleUrls: ["./project-info.component.scss"]
})
export class ProjectInfoComponent{
    @Input() projectTitle: string = "Project title here";
    @Input() projectSummary: string = "Project summary goes here";
    @Input() projectDetails: string = "Here is some more info about the project, maybe it explains some of the pictures as well."
    constructor(){}
}