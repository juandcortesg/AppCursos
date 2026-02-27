import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Course } from '../app/interfaces/course.interface';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses: Course[] = [];
    private nextId = 1;

    coursesChanged = new Subject<Course[]>();

    getCourses(): Course[] {
        return [...this.courses];
    }

    addCourse(data: Omit<Course, 'id'>): void {
        this.courses.push({
            id: this.nextId++,
            ...data
        });
        this.coursesChanged.next(this.getCourses());
    }

    toggleState(id: number): void {
        const course = this.courses.find(c => c.id === id);
        if (course) {
            course.estado = !course.estado;
            this.coursesChanged.next(this.getCourses());
        }
    }

    deleteCourse(id: number): void {
        this.courses = this.courses.filter(c => c.id !== id);
        this.coursesChanged.next(this.getCourses());
    }
}