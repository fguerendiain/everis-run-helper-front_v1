import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPriorizadosComponent } from './listado-priorizados.component';

describe('ListadoPriorizadosComponent', () => {
  let component: ListadoPriorizadosComponent;
  let fixture: ComponentFixture<ListadoPriorizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPriorizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPriorizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
