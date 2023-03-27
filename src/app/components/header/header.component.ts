import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  icon:boolean = false;
  bars = faBars;
  close = faXmark;


  @HostListener('document:scroll', ['$event']) documentScrollEvent($event: MouseEvent) {
    const header = document.querySelector('header');
    header?.classList.toggle('sticky',window.scrollY > 0);
  }

  toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation =  document.querySelector('.navigation');
    menuToggle?.classList.toggle('active');
    navigation?.classList.toggle('active');
    this.icon = !this.icon;
  }

}
