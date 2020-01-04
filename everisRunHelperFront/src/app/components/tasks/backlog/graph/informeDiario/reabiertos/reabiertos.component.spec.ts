import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabiertosComponent } from './reabiertos.component';

describe('ReabiertosComponent', () => {
  let component: ReabiertosComponent;
  let fixture: ComponentFixture<ReabiertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReabiertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReabiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
