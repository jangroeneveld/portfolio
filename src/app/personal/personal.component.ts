import { Component } from '@angular/core';

@Component({
    selector: 'personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})
export class PersonalComponent{
    name: string = "Jan Groeneveld";
    description: string = "Programmer";
    summary: string = "A CMD student who spends his personal time creating a portfolio website.";
    skills: Array<any> = [
        {name: "Research & Innovation", level: "Advanced"},
        {name: "Concepting", level: "Advanced"},
        {name: "Multimedia Design", level: "Advanced"},
        {name: "Multimedia Production", level: "Advanced"},
        {name: "Quality Monitoring & Implementation", level: "Advanced"},
        {name: "Communication", level: "Advanced"},
        {name: "Project Management", level: "Advanced"},
        {name: "Multidisciplinary Teamwork", level: "Advanced"},
        {name: "Sharing", level: "Advanced"},
        {name: "Growth & Reflection", level: "Advanced"},
    ];
}