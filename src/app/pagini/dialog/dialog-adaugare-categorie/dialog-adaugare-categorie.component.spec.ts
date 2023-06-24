import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareCategorieComponent } from './dialog-adaugare-categorie.component';

describe('DialogAdaugareCategorieComponent', () => {
  let component: DialogAdaugareCategorieComponent;
  let fixture: ComponentFixture<DialogAdaugareCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
