import { Injectable } from '@angular/core';
import { Issue } from "./issue";

const ISSUES: Issue[] = [
  {id: 1, location: 'PC5', description: 'Something wrong 1', status: 'ADDED'},
  {id: 2, location: 'PC3', description: 'Something wrong 2', status: 'ASSIGNED'},
  {id: 3, location: 'PC4', description: 'Something wrong 3', status: 'ADDED'},
  {id: 4, location: 'PC2', description: 'Something wrong 4', status: 'DONE'},
];

@Injectable()
export class IssueService {

  constructor() { }

  getIssues(): Issue[] {
    return ISSUES;
  }

  getIssue(id: number): Issue {
    return ISSUES.find(issue => issue.id === id);
  }

}
