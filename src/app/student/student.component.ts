import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    {name : "Ettore Esposito", hobby : 'karate', sex : 'M', isPro : false},
    {name : "Bianca Teleman", hobby : 'calcio', sex : 'F', isPro : false},
    {name : "Paolo Giordano", hobby : 'mostrare la patente', sex : 'M', isPro : true},
    {name : "Giada Valinotto", hobby : 'karate', sex : 'F', isPro : false},
    {name : "Gesù Cristo", hobby : 'karate', sex : 'M', isPro : true},
    {name : "Federico Mameli", hobby : 'calcio', sex : 'M', isPro : true},
    {name : "Martina Velardi", hobby : 'karate', sex : 'F', isPro : true},
    {name : "Marta Baudracco", hobby : 'karate', sex : 'F', isPro : false},
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
