import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareAutorComponent } from './dialog-adaugare-autor.component';

describe('DialogAdaugareAutorComponent', () => {
  let component: DialogAdaugareAutorComponent;
  let fixture: ComponentFixture<DialogAdaugareAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
