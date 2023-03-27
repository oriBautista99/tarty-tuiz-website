import { Component, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent {

  person: any[] = [
    {sex: 'w', name: 'Angie Lorena Bautista Iscala', ci:'30.569.673', job: 'angie.jpg'},
    {sex: 'w', name: 'Karen Andrea Carrera Herrera', ci:'30.569.673', job: 'karen.jpg'},
    {sex: 'm', name: 'Luis Alexander García Arellano', ci:'30.569.673'},
    {sex: 'w', name: 'Mariangel Montilva Peñaloza', ci:'30.569.673'},
    {sex: 'm', name: 'Leandro Josue Zambrano Corredor', ci:'30.569.673'},
    {sex: 'm', name: 'Javier Eduardo Suarez Tapias', ci:'30.569.673'},
  ];

}
