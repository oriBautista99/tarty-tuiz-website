import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css']
})
export class CardPersonComponent {

  @Input() name:string = '';
  @Input() sex:string = '';
  @Input() ci:string = '';
  @Input() job:string = '';

}
