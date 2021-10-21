import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("txtName") txtName !:ElementRef;

  title = '5^B INF';
  hobbies = ["calcio", "karate", "paddle"];

  studentName :string = "";
  studentSex :string = "M";
  studentHobby :string = this.hobbies[0];
  studentList :any[] = [];
  studentRepository = [
    {name : "Ettore Esposito", hobby : 'karate', sex : 'M', isPro : false},
    {name : "Bianca Teleman", hobby : 'calcio', sex : 'F', isPro : false},
    {name : "Paolo Giordano", hobby : 'mostrare la patente', sex : 'M', isPro : false},
    {name : "Giada Valinotto", hobby : 'karate', sex : 'F', isPro : false},
    {name : "Gesù Cristo", hobby : 'karate', sex : 'M', isPro : false},
    {name : "Federico Mameli", hobby : 'calcio', sex : 'M', isPro : false},
    {name : "Martina Velardi", hobby : 'karate', sex : 'F', isPro : false},
    {name : "Marta Baudracco", hobby : 'karate', sex : 'F', isPro : false},
  ];

  constructor() {
    for (let i = 0; i < 4; i++)
    {
      let rnd :number = Math.floor(Math.random() * this.studentRepository.length);
      this.studentList.push(this.studentRepository[rnd]);
      this.studentRepository.splice(rnd, 1);
    }
  }

  onCreateStudent() {
    let newStudent = { name : this.studentName, hobby : this.studentHobby , sex : this.studentSex, isPro : false };
    this.studentList.push(newStudent);
    this.studentName = "";

    this.txtName.nativeElement.focus();
  }
}
