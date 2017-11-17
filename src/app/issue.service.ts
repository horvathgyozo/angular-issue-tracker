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

  getIssues(): Promise<Issue[]> {
    return Promise.resolve(ISSUES);
  }

  getIssuesSlowly(): Promise<Issue[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ISSUES), 3000);
    });
  }

  getIssue(id: number): Promise<Issue> {
    return Promise.resolve(ISSUES.find(issue => issue.id === id));
  }

  updateIssue(issue: Issue): Promise<Issue> {
    return Promise.resolve(Object.assign(this.getIssue(issue.id), issue));
  }

  addIssue(issue: Issue): Promise<Issue> {
    const newIssue: Issue = Object.assign(
      issue,
      { id: ISSUES.length+1, status: 'ADDED' }
    );
    ISSUES.push(newIssue);
    return Promise.resolve(newIssue);
  }

}
