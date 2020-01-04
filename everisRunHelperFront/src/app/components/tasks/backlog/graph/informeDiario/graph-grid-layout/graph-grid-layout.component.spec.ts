import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphGridLayoutComponent } from './graph-grid-layout.component';

describe('GraphGridLayoutComponent', () => {
  let component: GraphGridLayoutComponent;
  let fixture: ComponentFixture<GraphGridLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphGridLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
