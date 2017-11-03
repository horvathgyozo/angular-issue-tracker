import { Component } from '@angular/core';
import { Issue } from "../issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {

  issues: Issue[] = [
    {id: 1, location: 'PC5', description: 'Something wrong 1', status: 'ADDED'},
    {id: 2, location: 'PC3', description: 'Something wrong 2', status: 'ASSIGNED'},
    {id: 3, location: 'PC4', description: 'Something wrong 3', status: 'ADDED'},
    {id: 4, location: 'PC2', description: 'Something wrong 4', status: 'DONE'},
  ]

  statuses: string[] = [
    'ADDED', 'ASSIGNED', 'DONE'
  ]

  selectedStatus = ''

  onFilterChange(value) {
    this.selectedStatus = value;
  }

}
