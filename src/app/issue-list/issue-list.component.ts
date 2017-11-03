import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";

const issues: Issue[] = [
  {id: 1, location: 'PC5', description: 'Something wrong 1', status: 'ADDED'},
  {id: 2, location: 'PC3', description: 'Something wrong 2', status: 'ASSIGNED'},
  {id: 3, location: 'PC4', description: 'Something wrong 3', status: 'ADDED'},
  {id: 4, location: 'PC2', description: 'Something wrong 4', status: 'DONE'},
];

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues = [];
  filteredIssues = [];

  selectedStatus = ''

  ngOnInit() {
    this.issues = issues;
    this.filterIssues();
  }

  onFilterChange(value) {
    this.selectedStatus = value;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === '' ? this.issues : issues.filter(issue => issue.status === this.selectedStatus);
  }

}
