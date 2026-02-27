import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private coursesService: CoursesService
    ) {
        this.form = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            duracion: [null, [Validators.required, Validators.min(1)]],
            nivel: ['', Validators.required],
            estado: [true, Validators.required]
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        this.coursesService.addCourse(this.form.value);
        this.form.reset();
    }
}