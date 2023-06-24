import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdaugareProdusAdminComponent } from './dialog-adaugare-produs-admin.component';

describe('DialogAdaugareProdusAdminComponent', () => {
  let component: DialogAdaugareProdusAdminComponent;
  let fixture: ComponentFixture<DialogAdaugareProdusAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdaugareProdusAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdaugareProdusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
