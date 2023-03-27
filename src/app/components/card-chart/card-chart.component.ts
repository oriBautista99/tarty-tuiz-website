import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent {

  @Input() name='';
  @Input() img='';
  @Input() text='';
  @Input() type='';
  @Input() img1='';
  @Input() img2='';
  @Input() title1='';
  @Input() title2='';

}
