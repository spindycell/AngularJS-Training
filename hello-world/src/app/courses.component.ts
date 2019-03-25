import {CoursesService} from './course/courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `

    // template: '<h2>{{ getTitle() }}</h2>' //string Interpolation
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    //Dependency Injection
    constructor (service: CoursesService){
        // let service = new CoursesService(); //hapus dan kasih di parameter constructor
        this.courses = service.getCourses();
    }

    // getTitle(){
    //     return this.title;
    // }
}