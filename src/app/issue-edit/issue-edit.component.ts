import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Issue } from "../issue";
import { Observable } from "rxjs";
import { IssueService } from "../issue.service";

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue;

    constructor(
      private route: ActivatedRoute,
      private issueService: IssueService,
      private location: Location
    ) { }

    ngOnInit() {
      this.getIssue();
    }

    getIssue() {
      this.route.paramMap
        .switchMap((params: ParamMap) => {
          const id = +params.get('id');
          const issue = this.issueService.getIssue(id);
          return Observable.of(issue);
        })
        .subscribe(issue => this.issue = issue);

    }

    onFormSubmit(issue: Issue) {
      this.issueService.updateIssue(issue);
      this.location.back();
    }

    onFormReset() {
      this.location.back();
    }

}
