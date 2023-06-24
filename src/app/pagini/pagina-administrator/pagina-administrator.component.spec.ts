import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAdministratorComponent } from './pagina-administrator.component';

describe('PaginaAdministratorComponent', () => {
  let component: PaginaAdministratorComponent;
  let fixture: ComponentFixture<PaginaAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAdministratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
