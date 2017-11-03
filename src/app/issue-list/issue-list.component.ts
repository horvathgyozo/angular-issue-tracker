import { Component, OnInit, ViewChild } from '@angular/core';
import { Issue } from "../issue";
import { IssueFormComponent } from "../issue-form/issue-form.component";

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
  @ViewChild(IssueFormComponent) issueForm: IssueFormComponent;

  issues = [];
  filteredIssues = [];

  selectedStatus = '';
  selectedIssue = null;

  ngOnInit() {
    this.issues = issues;
    this.filterIssues();
  }

  onFilterChange(value: string) {
    this.selectedStatus = value;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === '' ? this.issues : issues.filter(issue => issue.status === this.selectedStatus);
  }

  onSelectIssue(issue: Issue) {
    if (!this.issueForm) {
      this.selectedIssue = issue;
    }
    else if (this.issueForm.form.dirty) {
      if (window.confirm('Discard changes?')) {
        this.selectedIssue = issue;
        this.issueForm.form.reset();
      }
    }
    else {
      this.selectedIssue = issue;
    }
  }

  onFormSubmit(issue: Issue) {
    if (issue.id > 0) {
      this.selectedIssue.location = issue.location;
      this.selectedIssue.description = issue.description;
    } else {
      Object.assign(this.selectedIssue, issue, {id:Math.floor(Math.random()*1000000)});
      this.issues.push(this.selectedIssue);
    }
    this.selectedIssue = null;
  }

  onNewClick() {
    this.selectedIssue = new Issue();
  }

}
