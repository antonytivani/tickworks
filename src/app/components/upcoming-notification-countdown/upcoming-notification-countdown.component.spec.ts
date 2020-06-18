import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingNotificationCountdownComponent } from './upcoming-notification-countdown.component';

describe('UpcomingNotificationCountdownComponent', () => {
  let component: UpcomingNotificationCountdownComponent;
  let fixture: ComponentFixture<UpcomingNotificationCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingNotificationCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingNotificationCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
