import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelCategorieComponent } from './pagina-tabel-categorie.component';

describe('PaginaTabelCategorieComponent', () => {
  let component: PaginaTabelCategorieComponent;
  let fixture: ComponentFixture<PaginaTabelCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
