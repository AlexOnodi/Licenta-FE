import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCosComponent } from './pagina-cos.component';

describe('PaginaCosComponent', () => {
  let component: PaginaCosComponent;
  let fixture: ComponentFixture<PaginaCosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
