import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSliderImaginiComponent } from './pagina-slider-imagini.component';

describe('PaginaSliderImaginiComponent', () => {
  let component: PaginaSliderImaginiComponent;
  let fixture: ComponentFixture<PaginaSliderImaginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSliderImaginiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSliderImaginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
