import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';

@Component({
  selector: 'app-root',
  template: `
    <app-student-list></app-student-list>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, StudentListComponent]
})
export class AppComponent { } 