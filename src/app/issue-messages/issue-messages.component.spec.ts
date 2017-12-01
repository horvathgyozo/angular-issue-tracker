import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMessagesComponent } from './issue-messages.component';

describe('IssueMessagesComponent', () => {
  let component: IssueMessagesComponent;
  let fixture: ComponentFixture<IssueMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
