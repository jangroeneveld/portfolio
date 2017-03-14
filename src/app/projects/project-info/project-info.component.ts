import { Component } from '@angular/core';

@Component({
    selector: "project-info",
    templateUrl: "./project-info.component.html",
    styleUrls: ["./project-info.component.scss"]
})
export class ProjectInfoComponent{
    projectTitle: string = "Project title here";
    projectSummary: string = "Project summary goes here";
    projectDetails: string = "Here is some more info about the project, maybe it explains some of the pictures as well."
    constructor(){}
}