import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelAutorComponent } from './pagina-tabel-autor.component';

describe('PaginaTabelAutorComponent', () => {
  let component: PaginaTabelAutorComponent;
  let fixture: ComponentFixture<PaginaTabelAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
