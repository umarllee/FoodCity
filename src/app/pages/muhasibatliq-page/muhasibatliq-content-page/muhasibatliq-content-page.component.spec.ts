import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhasibatliqContentPageComponent } from './muhasibatliq-content-page.component';

describe('MuhasibatliqContentPageComponent', () => {
  let component: MuhasibatliqContentPageComponent;
  let fixture: ComponentFixture<MuhasibatliqContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuhasibatliqContentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhasibatliqContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
