import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListaFavoriteComponent } from './pagina-lista-favorite.component';

describe('PaginaListaFavoriteComponent', () => {
  let component: PaginaListaFavoriteComponent;
  let fixture: ComponentFixture<PaginaListaFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaListaFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaListaFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
