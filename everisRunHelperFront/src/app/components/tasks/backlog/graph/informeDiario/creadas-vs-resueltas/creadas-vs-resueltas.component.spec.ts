import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadasVsResueltasComponent } from './creadas-vs-resueltas.component';

describe('CreadasVsResueltasComponent', () => {
  let component: CreadasVsResueltasComponent;
  let fixture: ComponentFixture<CreadasVsResueltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadasVsResueltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadasVsResueltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
