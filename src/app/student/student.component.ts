import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student :any;

  constructor() {
    
  }

  ngOnInit(): void {
    this.student.isPro = this.RandomStudentPro();
  }

  onStudentClick () {
    this.student.isPro = !this.student.isPro;
  }

  private RandomStudentPro() {
    let num = Math.floor(Math.random() * 2);
    return num == 1 ? true : false;
  }
}
