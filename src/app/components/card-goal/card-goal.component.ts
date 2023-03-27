import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-goal',
  templateUrl: './card-goal.component.html',
  styleUrls: ['./card-goal.component.css']
})
export class CardGoalComponent {
  @Input() type:string = '';
  @Input() text:string = '';
  @Input() color:string = '';

}
