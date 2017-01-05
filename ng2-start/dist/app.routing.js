"use strict";
var router_1 = require("@angular/router");
var courses_component_1 = require("./courses/courses.component");
var author_component_1 = require("./authors/author.component");
var contact_form_component_1 = require("./contactForm/contact-form.component");
var appRouts = [
    { path: '', name: 'Courses', component: courses_component_1.CoursesComponent, useAsDefault: true },
    { path: 'authors', name: 'Authors', component: author_component_1.AuthorComponent },
    { path: 'contact', name: 'Contact', component: contact_form_component_1.ContactFormComponent },
    { path: '**', name: 'Others', component: courses_component_1.CoursesComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(appRouts);
//# sourceMappingURL=app.routing.js.map