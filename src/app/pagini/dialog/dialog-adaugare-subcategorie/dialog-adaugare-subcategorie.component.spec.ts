import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareSubcategorieComponent } from './dialog-adaugare-subcategorie.component';

describe('DialogAdaugareSubcategorieComponent', () => {
  let component: DialogAdaugareSubcategorieComponent;
  let fixture: ComponentFixture<DialogAdaugareSubcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareSubcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareSubcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
