import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelAdresaComponent } from './pagina-tabel-adresa.component';

describe('PaginaTabelAdresaComponent', () => {
  let component: PaginaTabelAdresaComponent;
  let fixture: ComponentFixture<PaginaTabelAdresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelAdresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelAdresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
