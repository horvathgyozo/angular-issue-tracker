import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent {

  statuses: string[] = [
    'ADDED', 'ASSIGNED', 'DONE'
  ];
  @Input('status') selectedStatus = '';
  @Output() onChange = new EventEmitter<string>();

  onFilterChange(value) {
    this.selectedStatus = value;
    this.onChange.emit(value);
  }


}
