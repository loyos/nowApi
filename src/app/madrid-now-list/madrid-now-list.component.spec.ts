import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridNowListComponent } from './madrid-now-list.component';

describe('MadridNowListComponent', () => {
  let component: MadridNowListComponent;
  let fixture: ComponentFixture<MadridNowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadridNowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadridNowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
