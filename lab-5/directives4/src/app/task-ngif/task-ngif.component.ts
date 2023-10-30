import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-ngif',
  template: `
    <p *ngIf="condition">Hello world!</p>
    <p *ngIf="!condition">Bye world!</p>
    <p *ngIf="condition; else unset">Hello Angular!</p>
    <ng-template #unset>
      <p>Bye Angular!</p>
    </ng-template>
    <div *ngIf="condition; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>Then template</ng-template>
    <ng-template #elseBlock>Else template</ng-template>
    <br />
  `,
})
export class TaskNgifComponent {
  @Input() 'condition': boolean;
}
