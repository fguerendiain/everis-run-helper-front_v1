import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessResponseComponent } from './process-response.component';

describe('ProcessResponseComponent', () => {
  let component: ProcessResponseComponent;
  let fixture: ComponentFixture<ProcessResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
