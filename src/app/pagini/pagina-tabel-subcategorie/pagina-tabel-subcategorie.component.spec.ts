import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelSubcategorieComponent } from './pagina-tabel-subcategorie.component';

describe('PaginaTabelSubcategorieComponent', () => {
  let component: PaginaTabelSubcategorieComponent;
  let fixture: ComponentFixture<PaginaTabelSubcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelSubcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelSubcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
