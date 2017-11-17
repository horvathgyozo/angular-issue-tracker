import { Injectable } from '@angular/core';
import { Issue } from "./issue";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const ISSUES: Issue[] = [
  {id: 1, location: 'PC5', description: 'Something wrong 1', status: 'ADDED'},
  {id: 2, location: 'PC3', description: 'Something wrong 2', status: 'ASSIGNED'},
  {id: 3, location: 'PC4', description: 'Something wrong 3', status: 'ADDED'},
  {id: 4, location: 'PC2', description: 'Something wrong 4', status: 'DONE'},
];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IssueService {

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>('http://localhost:4200/api/issue').toPromise();
  }

  getIssuesSlowly(): Promise<Issue[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(ISSUES), 3000);
    });
  }

  getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(`http://localhost:4200/api/issue/${id}`).toPromise();
  }

  updateIssue(issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(`http://localhost:4200/api/issue/${issue.id}`, issue, httpOptions).toPromise();
  }

  addIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(`http://localhost:4200/api/issue`, issue, httpOptions).toPromise();
  }

}
