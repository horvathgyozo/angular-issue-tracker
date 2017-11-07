import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Issue } from "../issue";
import { Observable } from "rxjs";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getIssue();
  }

  getIssue() {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const issue = new Issue();
        issue.id = +params.get('id');
        return Observable.of(issue);
      })
      .subscribe(issue => this.issue = issue);

  }

}
