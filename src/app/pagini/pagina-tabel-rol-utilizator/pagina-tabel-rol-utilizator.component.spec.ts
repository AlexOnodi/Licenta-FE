import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelRolUtilizatorComponent } from './pagina-tabel-rol-utilizator.component';

describe('PaginaTabelRolUtilizatorComponent', () => {
  let component: PaginaTabelRolUtilizatorComponent;
  let fixture: ComponentFixture<PaginaTabelRolUtilizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelRolUtilizatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelRolUtilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
