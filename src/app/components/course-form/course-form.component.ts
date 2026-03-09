import { Component } from '@angular/core';
import { CoursesService } from '../../courses.service';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

    nombre: string = '';
    duracion: number | null = null;
    nivel: string = '';
    estado: boolean = true;

    constructor(private coursesService: CoursesService) {}

    onSubmit(form: any): void {
        if (!form.valid) {
            return;
        }

        this.coursesService.addCourse({
            nombre: this.nombre,
            duracion: this.duracion!,
            nivel: this.nivel,
            estado: this.estado
        });

        this.nombre = '';
        this.duracion = null;
        this.nivel = '';
        this.estado = true;
    }
}