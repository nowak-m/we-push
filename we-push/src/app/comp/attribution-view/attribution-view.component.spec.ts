import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionViewComponent } from './attribution-view.component';

describe('AttributionViewComponent', () => {
  let component: AttributionViewComponent;
  let fixture: ComponentFixture<AttributionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributionViewComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
