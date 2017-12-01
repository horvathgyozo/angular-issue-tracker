import { Injectable } from '@angular/core';
import { Issue } from "./issue";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Message } from './message';

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

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('http://localhost:4200/api/issue');
  }

  getIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(`http://localhost:4200/api/issue/${id}`);
  }

  updateIssue(issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`http://localhost:4200/api/issue/${issue.id}`, issue, httpOptions);
  }

  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`http://localhost:4200/api/issue`, issue, httpOptions);
  }

  addMessage(issue: Issue, text: string): Observable<Message> {
    return this.http.post<Message>(`http://localhost:4200/api/issue/${issue.id}/message`, {text}, httpOptions);
  }

}
