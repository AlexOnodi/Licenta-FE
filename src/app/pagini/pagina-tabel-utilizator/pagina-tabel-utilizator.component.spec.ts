import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTabelUtilizatorComponent } from './pagina-tabel-utilizator.component';

describe('PaginaTabelUtilizatorComponent', () => {
  let component: PaginaTabelUtilizatorComponent;
  let fixture: ComponentFixture<PaginaTabelUtilizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTabelUtilizatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTabelUtilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
