import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Issue } from "../issue";

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {
  @ViewChild(NgForm) form: NgForm;

  @Input() issue: Issue = null;
  model: Issue = null;

  constructor() { }

  // ngOnInit() {
  //   this.model = Object.assign({}, this.issue);
  // }

  ngOnChanges() {
    this.model = Object.assign({}, this.issue);
  }

  onSubmit(form) {
    console.log(form);
    if (!form.valid) {
      return;
    }

    // Object.assign(this.issue, this.model);
    this.issue.location = this.model.location;
    this.issue.description = this.model.description;
  }

}
