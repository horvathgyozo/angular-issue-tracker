import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'issue-messages',
  templateUrl: './issue-messages.component.html',
  styleUrls: ['./issue-messages.component.css']
})
export class IssueMessagesComponent implements OnInit {

  @Input() messages: Message[];
  message: string = '';

  constructor() { }

  ngOnInit() {
  }

  onEnter(message) {

  }

}
