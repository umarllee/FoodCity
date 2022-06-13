import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFakturaComponent } from './add-faktura.component';

describe('AddFakturaComponent', () => {
  let component: AddFakturaComponent;
  let fixture: ComponentFixture<AddFakturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFakturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFakturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
