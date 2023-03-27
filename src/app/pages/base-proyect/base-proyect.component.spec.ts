import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseProyectComponent } from './base-proyect.component';

describe('BaseProyectComponent', () => {
  let component: BaseProyectComponent;
  let fixture: ComponentFixture<BaseProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseProyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
