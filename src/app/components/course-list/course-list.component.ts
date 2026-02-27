import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { Course } from '../../interfaces/course.interface';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor(private coursesService: CoursesService) {}

    ngOnInit(): void {
        this.courses = this.coursesService.getCourses();
        this.coursesService.coursesChanged.subscribe(courses => {
            this.courses = courses;
        });
    }

    toggleState(id: number): void {
        this.coursesService.toggleState(id);
    }

    deleteCourse(id: number): void {
        this.coursesService.deleteCourse(id);
    }
}