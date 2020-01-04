import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogPriorizadoComponent } from './backlog-priorizado.component';

describe('BacklogPriorizadoComponent', () => {
  let component: BacklogPriorizadoComponent;
  let fixture: ComponentFixture<BacklogPriorizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogPriorizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogPriorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
