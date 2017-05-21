import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My patient App</h1>
    <h3 (click)="doStuff()" *ngFor="let currentPatient of patients">{{ currentPatient.description }}</h3>
  </div>
  `
})
export class AppComponent{
public patients : Patient[] =[

new Patient("Ngigi Kahoto.", 0),
new Patient("Lucy Muthoni.", 1),
new Patient("Victor Aiti.", 2),
new Patient("Moses Okemwa.", 3),
new Patient("Sheilan Wairimu.", 4),
new Patient("Kenyanjui Kenyanjui.", 5),
new Patient("Betty Major.", 6),
new Patient("Itwaruichiu Ian.", 7),
new Patient("Sam Mascot.", 8),
new Patient("Rita Mumo.", 9),
];

doStuff (){
alert("you just clicked on a patient");
}

}


export class Patient{
 constructor(public description: string, public id: number) {   }

}
