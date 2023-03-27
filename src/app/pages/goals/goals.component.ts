import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {

  goals: any[] = [
    {type: 'General', text: 'Preparar una tarta de mora con la sustitución al 100% del azúcar blanca procesada por el endulzante natural estevia y de la harina tradicional por harina integral que sea de agrado al consumidor.'},
    {type: 'Especifico', text: 'Evaluar las características organolépticas (sabor, textura, aroma, apariencia global) del producto desarrollado.'},
    {type: 'Especifico', text:'Adaptar el producto final a los resultados obtenidos de las encuestas antes de colocarlo definitivamente en el mercado.'},
    {type: 'Especifico', text: 'Definir la ubicación, distribución y presentación correcta para vender el producto'}
  ]
}
