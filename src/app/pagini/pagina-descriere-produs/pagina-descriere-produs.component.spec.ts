import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDescriereProdusComponent } from './pagina-descriere-produs.component';

describe('PaginaDescriereProdusComponent', () => {
  let component: PaginaDescriereProdusComponent;
  let fixture: ComponentFixture<PaginaDescriereProdusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDescriereProdusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDescriereProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
