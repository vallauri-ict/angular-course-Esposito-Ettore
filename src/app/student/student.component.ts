import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    {name : "Ettore Esposito", hobby : 'karate', sex : 'M'},
    {name : "Bianca Teleman", hobby : 'calcio', sex : 'F'},
    {name : "Paolo Giordano", hobby : 'mostrare la patente', sex : 'M'},
    {name : "Giada Valinotto", hobby : 'karate', sex : 'F'},
    {name : "Gesù Cristo", hobby : 'karate', sex : 'M'},
    {name : "Federico Mameli", hobby : 'calcio', sex : 'M'},
    {name : "Martina Velardi", hobby : 'karate', sex : 'F'},
    {name : "Marta Baudracco", hobby : 'karate', sex : 'F'},
  ]

  student :any;

  constructor() {
    this.student = this.RandomStudent();
  }

  ngOnInit(): void {
  }

  onStudentClick () {
    this.student = this.RandomStudent();
  }

  private RandomStudent() {
    let num = Math.floor(Math.random() * this.studentList.length);
    return this.studentList[num];
  }

}
