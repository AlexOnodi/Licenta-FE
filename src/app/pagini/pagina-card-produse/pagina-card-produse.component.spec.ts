import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCardProduseComponent } from './pagina-card-produse.component';

describe('PaginaCardProduseComponent', () => {
  let component: PaginaCardProduseComponent;
  let fixture: ComponentFixture<PaginaCardProduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCardProduseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCardProduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
