import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5^B INF';

  studentList = [
    {name : "Ettore Esposito", hobby : 'karate', sex : 'M', isPro : false},
    {name : "Bianca Teleman", hobby : 'calcio', sex : 'F', isPro : false},
    {name : "Paolo Giordano", hobby : 'mostrare la patente', sex : 'M', isPro : false},
    {name : "Giada Valinotto", hobby : 'karate', sex : 'F', isPro : false},
    {name : "Gesù Cristo", hobby : 'karate', sex : 'M', isPro : false},
    {name : "Federico Mameli", hobby : 'calcio', sex : 'M', isPro : false},
    {name : "Martina Velardi", hobby : 'karate', sex : 'F', isPro : false},
    {name : "Marta Baudracco", hobby : 'karate', sex : 'F', isPro : false},
  ]
}
