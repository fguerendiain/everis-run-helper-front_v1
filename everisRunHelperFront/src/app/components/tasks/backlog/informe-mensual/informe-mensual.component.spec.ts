import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMensualComponent } from './informe-mensual.component';

describe('InformeMensualComponent', () => {
  let component: InformeMensualComponent;
  let fixture: ComponentFixture<InformeMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
