import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Issue } from "../issue";
import { Observable } from "rxjs";
import { IssueService } from "../issue.service";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.getIssue();
  }

  getIssue() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap
      .switchMap((params: ParamMap) => this.issueService.getIssue(+params.get('id')))
      .subscribe(issue => this.issue = issue);
  }

}
