import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'issue-messages',
  templateUrl: './issue-messages.component.html',
  styleUrls: ['./issue-messages.component.css']
})
export class IssueMessagesComponent implements OnInit {

  @Input() messages: Message[] = [
    { id: 1, text: "message1" },
    { id: 1, text: "message2" },
    { id: 1, text: "message3" },
    { id: 1, text: "message4" }

  ]

  constructor() { }

  ngOnInit() {
  }

}
