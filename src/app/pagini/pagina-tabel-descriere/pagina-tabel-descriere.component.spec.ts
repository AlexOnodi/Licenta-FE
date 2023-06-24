import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelDescriereComponent } from './pagina-tabel-descriere.component';

describe('PaginaTabelDescriereComponent', () => {
  let component: PaginaTabelDescriereComponent;
  let fixture: ComponentFixture<PaginaTabelDescriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelDescriereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelDescriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
