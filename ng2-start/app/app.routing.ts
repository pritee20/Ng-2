import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './authors/author.component';
import {ContactFormComponent} from './contactForm/contact-form.component';

const appRouts: Routes = [
	  { path: '', name:'Courses', component: CoursesComponent, useAsDefault: true},
	  { path: 'authors', name: 'Authors', component: AuthorComponent },
	  {path: 'contact', name: 'Contact', component: ContactFormComponent},
	  {path: '**', name: 'Others', component:CoursesComponent}
]

export const AppRouting:  ModuleWithProviders = RouterModule.forRoot(appRouts);