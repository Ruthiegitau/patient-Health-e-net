import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Patient App</h1>
    <div *ngFor="let currentPatient of patients">
      <h3>{{ currentPatient.description }}</h3>
      <button (click)="showDetails(currentPatient)">Edit</button>
    </div>
    <div *ngIf="selectedPatient">
      <h1>Edit Patient</h1>
      <div>
        <label>Enter Patient Description:</label>
        <input [(ngModel)]="selectedPatient.description">
      </div>
      <div>
        <label>Enter Patient FirstName:</label>
        <input [(ngModel)]="selectedPatient.firstname">
        <button (click)="finishedEditing()">Done</button>
      </div>
      <div>
        <label>Enter Patient LastName:</label>
        <input [(ngModel)]="selectedPatient.lastname">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public patients: Patient[] = [
      new Patient("Moses Okemwa", 0),
      new Patient("Njeri Gitau", 1),
      new Patient("Agnes Kariuki", 2),
      new Patient("Randy Johnson", 3)
  ];
  selectedPatient: Patient = null;
  showDetails(clickedPatient: Patient) {
    this.selectedPatient = clickedPatient;
  }
  finishedEditing() {
    this.selectedPatient = null;
  }
}

export class Patient {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
