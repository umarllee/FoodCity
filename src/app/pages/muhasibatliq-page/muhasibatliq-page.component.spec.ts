import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhasibatliqPageComponent } from './muhasibatliq-page.component';

describe('MuhasibatliqPageComponent', () => {
  let component: MuhasibatliqPageComponent;
  let fixture: ComponentFixture<MuhasibatliqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuhasibatliqPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhasibatliqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
