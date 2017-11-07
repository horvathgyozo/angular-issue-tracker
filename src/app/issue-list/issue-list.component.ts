import { Component, OnInit, ViewChild } from '@angular/core';
import { Issue } from "../issue";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { IssueService } from "../issue.service";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [ IssueService ]
})
export class IssueListComponent implements OnInit {
  @ViewChild(IssueFormComponent) issueForm: IssueFormComponent;

  issues = [];
  filteredIssues = [];

  selectedStatus = '';
  selectedIssue = null;

  constructor(
    private issueService: IssueService
  ) {}

  ngOnInit() {
    this.issues = this.issueService.getIssues();
    this.filterIssues();
  }

  onFilterChange(value: string) {
    this.selectedStatus = value;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === '' ? this.issues : this.issues.filter(issue => issue.status === this.selectedStatus);
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
