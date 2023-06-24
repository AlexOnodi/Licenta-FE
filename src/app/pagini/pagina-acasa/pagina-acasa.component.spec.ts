import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAcasaComponent } from './pagina-acasa.component';


describe('PaginaAcasaComponent', () => {
  let component: PaginaAcasaComponent;
  let fixture: ComponentFixture<PaginaAcasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAcasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAcasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
