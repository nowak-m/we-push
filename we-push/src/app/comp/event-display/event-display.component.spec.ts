import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { EventDisplayComponent } from './event-display.component';

describe('EventDisplayComponent', () => {
  let component: EventDisplayComponent;
  let fixture: ComponentFixture<EventDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventDisplayComponent],
      providers: [
        {
          provide: 'GithubApiService',
          useValue: {
            pushEvents$: of([])
          }
        },
        {
          provide: Router,
          useValue: {}
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
