import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'issue-messages',
  templateUrl: './issue-messages.component.html',
  styleUrls: ['./issue-messages.component.css']
})
export class IssueMessagesComponent implements OnInit {

  @Input() messages: Message[];
  @Input() issue: Issue;
  message: string = '';

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
  }

  onEnter(message) {
    this.issueService.addMessage(this.issue, message)
      .subscribe(message => {
        this.messages.push(message);
        this.message = '';
      });
  }

}
