import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];
  private studentsSubject = new BehaviorSubject<Student[]>([]);

  constructor() {}

  getAllStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  addStudent(student: Student): void {
    student.id = this.students.length + 1;
    this.students.push(student);
    this.studentsSubject.next([...this.students]);
  }

  updateStudent(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
      this.studentsSubject.next([...this.students]);
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    this.studentsSubject.next([...this.students]);
  }

  searchStudents(name: string): Student[] {
    return this.students.filter(student => 
      student.name.toLowerCase().includes(name.toLowerCase())
    );
  }
} 