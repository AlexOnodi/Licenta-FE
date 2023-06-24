import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareDescriereComponent } from './dialog-adaugare-descriere.component';

describe('DialogAdaugareDescriereComponent', () => {
  let component: DialogAdaugareDescriereComponent;
  let fixture: ComponentFixture<DialogAdaugareDescriereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareDescriereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareDescriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
