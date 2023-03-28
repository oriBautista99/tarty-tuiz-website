import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  info: any[] = [
    { name: 'Apariencia Global', img:'assets/apariencia_global.png', text:'Fue de gran aceptación para nuestra audiencia, recibiendo 90% de opiniones a favor de ello.', type:'chart-simple'},
    { name: 'Sabor', img:'assets/sabor.png', text:'Un 87%, más de la mitad les gusta nuestro sabor.', type:'chart-simple'},
    { name: 'Textura', img:'assets/textura.png', text:'Al 70% le agrado la textura de la tarta.', type:'chart-simple'},
    { name: 'Aroma', img:'assets/aroma.png', text:'Aunque hubo un porcentaje representativo que le resulto indiferente 23% y no lo toma en cuenta, al 74% le gusto.', type:'chart-simple'},
    { name: 'Satisfacción', img:'assets/satisfacion.png', text:'Sin embargo, al medir el grado de satisfacción del producto se llegó a que la mayoría de votos rondaban entre el grado 7 y 10, demostrando que es un producto de calidad con altas probabilidades de que las personas en un futuro lo compraran y regresaran por él.', type:'chart-simple'}
  ];

  info2 = {
    name: 'Opiniones sobre nuestro producto',
    title1: 'Agregar',
    title2: 'Quitar',
    img1:'assets/agregar.png',
    img2:'assets/quitar.png',
    text:'También tuvimos diferentes opiniones acerca de lo que nuestro publico prefería cambiar o mejorar del producto Y aunque la mayoría de los consumidores expresaron que no le agregarían o le disminuirían nada, tomamos en cuenta las respuestas o sugerencias que más se repitieron:    Más dulce, Más variedad de sabores, Con mayor relleno. Mientras tanto otros opinaron que le disminuyéramos la sal o mejoráramos la textura.',
    type:'chart-double'
  }

}
