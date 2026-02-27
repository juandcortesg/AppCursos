import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseFormComponent,
        CourseListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }