import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipConectareUtilizatorComponent } from './tip-conectare-utilizator.component';

describe('TipConectareUtilizatorComponent', () => {
  let component: TipConectareUtilizatorComponent;
  let fixture: ComponentFixture<TipConectareUtilizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipConectareUtilizatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipConectareUtilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
