import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJiraFromAsiJiraComponent } from './create-jira-from-asi-jira.component';

describe('CreateJiraFromAsiJiraComponent', () => {
  let component: CreateJiraFromAsiJiraComponent;
  let fixture: ComponentFixture<CreateJiraFromAsiJiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJiraFromAsiJiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJiraFromAsiJiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
