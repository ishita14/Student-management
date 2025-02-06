import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  searchTerm: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
    });
  }

  onSearch(): void {
    if (this.searchTerm) {
      this.students = this.studentService.searchStudents(this.searchTerm);
    } else {
      this.studentService.getAllStudents().subscribe(students => {
        this.students = students;
      });
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id);
    }
  }
} 