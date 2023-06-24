import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareOptiuniComponent } from './dialog-adaugare-optiuni.component';

describe('DialogAdaugareOptiuniComponent', () => {
  let component: DialogAdaugareOptiuniComponent;
  let fixture: ComponentFixture<DialogAdaugareOptiuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareOptiuniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareOptiuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
