import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent {

  person: any[] = [
    {sex: 'w', name: 'Angie Lorena Bautista Iscala', ci:'30.569.673', job: 'angie.jpg'},
    {sex: 'w', name: 'Karen Andrea Carrera Herrera', ci:'27.567.551', job: 'karen.jpg'},
    {sex: 'm', name: 'Luis Alexander García Arellano', ci:'30.111.344', job:'luis.jpg'},
    {sex: 'w', name: 'Mariangel Montilva Peñaloza', ci:'30.569.673', job:'mariangel.jpg'},
    {sex: 'm', name: 'Leandro Josue Zambrano Corredor', ci:'30.339.198', job:'leandro.jpg'},
    {sex: 'm', name: 'Javier Eduardo Suarez Tapias', ci:'30.569.673', job:'javier.jpg'},
  ];

}
