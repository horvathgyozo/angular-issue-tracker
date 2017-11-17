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
          const id = params.get('id');
          const issue = id !== null ?  this.issueService.getIssue(+id) : Observable.of(new Issue());
          return issue;
        })
        .subscribe(issue => this.issue = issue);

    }

    onFormSubmit(issue: Issue) {
      let ob: Observable<Issue>;
      if (issue.id > 0) {
        ob = this.issueService.updateIssue(issue);
      } else {
        ob = this.issueService.addIssue(issue);
      }
      ob.subscribe(issue => this.location.back());
    }

    onFormReset() {
      this.location.back();
    }

}
