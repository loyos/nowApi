import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridNowComponent } from './madrid-now.component';

describe('MadridNowComponent', () => {
  let component: MadridNowComponent;
  let fixture: ComponentFixture<MadridNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadridNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadridNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
